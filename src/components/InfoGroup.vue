<template>
  <div class="info-group">
    <div class="info-item col">
        <div>Wind 💨</div>
        <div class="f-highlight">{{floor(data.wind)}}km/h</div>
    </div>
    <div class="info-item col">
        <div>Temp. 🌡</div>
        <div class="f-highlight">{{floor(data.temp)}}˚C</div>
    </div>
    <div class="info-item col">
        <div>Humid. 💧</div>
        <div class="f-highlight">{{floor(data.humidity)}}%</div>
    </div>
  </div>
</template>

<script>
export default {
    name: "InfoGroup",
    props: {
        data: {}
    },
    methods: {
        floor: function(number) {
            if (number)
                return Math.floor(number)
        }
    },
}
</script>

<style lang="sass">
    @import '@/assets/sass/_variables.sass'
.info-group
    font-size: 13.92px
    width: 85%
    margin: auto
    display: flex
    justify-content: space-around
    margin-bottom: 1em

.info-item
    width: 96px
    padding: 1em .55em
    background: transparentize(#fff, .4)
    border-radius: .625rem
    box-shadow: $shadow

    // display: flex
    // flex-direction: column
    

</style>