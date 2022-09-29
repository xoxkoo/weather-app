<template>
    <header>
        <h1 class="title">WeatherApp 🌦</h1>
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
    name: "AppHeader",
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
h1
    font-weight: bold
    margin: 0
    font-size: 1.8rem
    text-align: left
</style>