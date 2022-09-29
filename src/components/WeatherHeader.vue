<template>
    <header>
        <div class="col">
            <div class="date">{{date}}.</div>
            <div class="city-name"><img src="../assets/img/location-pin.png" alt="location pin" class="location-pin">{{city}}</div>
        </div>

        <label class="hamburger-icon">
            <input type="checkbox">
            <div></div>
            <div></div>
            <div></div>
            <ul class="menu">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/weather">Weather</router-link></li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </label>

    </header>
</template>

<script>
export default {
    name: "WeatherHeader",
    props: {
        city: {}
    },
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

    & img
        margin-right: .1em


.location-pin
    width: 20px
    transform: rotateY(174deg)
</style>