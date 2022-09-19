<template>
    <header>
        <div class="col">
            <div class="date">{{date}}.</div>
            <div class="city-name"><img src="../assets/img/location-pin.png" alt="location pin" class="location-pin"> Copenhagen</div>
        </div>

        <div class="person">
            👨‍💻
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
            date: ''
        }
    },
    methods: {
        getTime() {
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            const today = new Date()
            this.date = today.toLocaleDateString("en-US", options)
        }
    },
    mounted() {
        this.getTime()
    },
}

</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"
header
    display: flex
    justify-content: space-between
    padding: 2em 1.5em 1em
.date
    color: lighten($c_dark, 35)
    
.city-name
    color: $c_dark
    font-size: 1.8rem

.person
    font-size: 3rem
    border: 1px solid $c_dark
    border-radius: 10px
    padding: 0 .2em

.location-pin
    width: 20px
    transform: rotateY(174deg)
</style>