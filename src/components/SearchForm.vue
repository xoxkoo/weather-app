<template>
  <form action="#" @submit.prevent="getLocation()">
        <label for="search" class="form-group">
            <img src="../assets/img/location-2969395.png" alt="image" >
            <label for="search" class="label">Enter Location</label>
            <input v-model="input" type="text" class="input" id="search" name="search" @focus="focusHandler($event)" @focusout="focusHandler($event)">
            <button class="btn btn-primary" type="submit">search</button>
        </label>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    
    data() {
        return {
            input: '',
            apiKey: '0f2db6dd2a3a38ceaa3ebedf2b0112b4',
        }
    },
    methods: {
        focusHandler(event) {
            const targetName = event.target.name;
            const label = document.querySelector(".label", `for="${targetName}"`);
            if (event.type !== "focusout") {
                label.classList.add("active");
            }
            else if (event.target.value == "") {
                console.log(event.type);

                label.classList.remove("active");
                this.$emit('hide-search-results', '')
            }
            else {
            console.log(event.type);

                this.$emit('hide-search-results', '')
            }
        },
        getLocation() {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.input}&appid=${this.apiKey}&units=metric`)
            .then(response => {
                this.$emit('search', this.extractDataFromLocation(response.data))
            })
            .catch(err => {
                this.$emit('search', this.extractDataFromLocation(err.response.data))

            })
        },
        extractDataFromLocation(data) {
            if (data.cod == 404) {
                return {
                    code: data.cod,
                    msg: 'No results were found 🚫'
                }
            }
            else {
                return {
                    code: data.cod,
                    name: data.name,
                    country: data.sys.country,
                    weather: data.weather.main,
                    wind: data.wind.speed,
                    temp: data.main.temp,
                    humidity: data.main.humidity
                }
            }
        }
    }
}
</script>

<style lang="sass">
.form-group
    font-size: 1.075rem
    display: flex
    align-content: center
    position: absolute
    bottom: 2em
    left: 50%
    transform: translateX(-50%)
    width: calc( 100% - 3em )
    margin: auto
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px
    padding: .5 1em .5em 0
    border-radius: 1.2em
    cursor: text
    background: #fff


    img
        display: inline-block
        // position: absolute
        z-index: 1
        height: 4em
.input
    margin: auto
    height: 100%
    font-size: 1.3rem
    border: none
    width: 100%
    &:focus
        outline: none
    // background: $c_light
.label
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 3.5em
    transition: .3s
    background: #fff
    padding: 0 4px
    cursor: text
    &.active
       top: -1px

.btn
    height: 3em
    margin: auto .75em auto .25em
</style>