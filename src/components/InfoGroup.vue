<template>
  <div class="info-group">
    <div class="info-item col">
        <div>Wind 💨</div>
        <div class="f-highlight">155</div>
    </div>
    <div class="info-item col">
        <div>Temp. 🌡</div>
        <div class="f-highlight">30ºC</div>
    </div>
    <div class="info-item col">
        <div>Humid. 💧</div>
        <div class="f-highlight">10%</div>
    </div>
  </div>
</template>

<script>
export default {
    name: "InfoGroup"
}
</script>

<style lang="sass">
    @import '@/assets/sass/_variables.sass'
.info-group
    font-size: .87rem
    width: 85%
    margin: auto
    display: flex
    justify-content: space-around
    margin-bottom: 1em

.info-item
    width: 6rem
    padding: 1em .55em
    background: transparentize(#fff, .4)
    border-radius: 10px
    box-shadow: $shadow

    // display: flex
    // flex-direction: column
    

</style>