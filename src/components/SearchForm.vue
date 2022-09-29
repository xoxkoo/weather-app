<template>
  <form action="#" @submit.prevent="submitForm()">
        <div class="searchResults-group" :class="{ active: showSearchResult && result != {} }">
            <button type="submit" class="search-item">{{this.result.msg}}</button>
            <!-- {{this.result.msg}} -->
        </div>
        <label for="search" class="form-group">
            <img src="../assets/img/location-2969395.png" alt="image" >
            <label for="search" class="label">Enter Location</label>
            <input v-model="input" type="text" class="input" id="search" name="search" @input="onSearchInput()" @focus="focusHandler($event)" @focusout="focusHandler($event)">
            <button class="btn btn-primary">search</button>
        </label>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    
    data() {
        return {
            input: '',
            apiKey: process.env.VUE_APP_API_KEY,
            searchResult: [],
            result: {},
            debounce: null,
            showSearchResult: false

        }
    },
    mounted() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Horsens&appid=${this.apiKey}&units=metric`)
                .then(response => {
                    this.result = this.extractDataFromLocation(response.data)
                    this.submitForm()
                })
    },
    methods: {
        onSearchInput() {
            clearTimeout(this.debounce) 
            // do request after user stopped typing for some time
            this.debounce = setTimeout(() => {
                this.getData()
            }, 500)
        },
        // api request
        getData() {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.input}&appid=${this.apiKey}&units=metric`)
                .then(response => {
                    this.result = this.extractDataFromLocation(response.data)
                    // this.searchResult.push(this.extractDataFromLocation(response.data))
                    this.getForecast()
                })
                .catch(err => {
                    this.result = this.extractDataFromLocation(err.response.data)

                    // this.searchResult.push(this.extractDataFromLocation(err.response.data))
                })
        },
        getForecast() {
            axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.input}&appid=${this.apiKey}&units=metric`)
            .then(response => {
                console.log(response);
            })
        },
        // move label up and down when user focus on input
        focusHandler(event) {
            const targetName = event.target.name;
            const label = document.querySelector(".label", `for="${targetName}"`);
            if (event.type !== "focusout") {
                label.classList.add("active");
                this.showSearchResult = true
            }
            else if (event.target.value == "") {
                label.classList.remove("active");
                this.showSearchResult = false
            }
            else {
                this.showSearchResult = false
            }
        },
        // send data to parent
        submitForm() {
            // there was found result, we can show data
            if(this.result.code === 200) {
                this.$emit('form-submited', this.result) 
            }
            // if(this.searchResult[this.searchResult.length - 1].code === 200) {
            //     this.$emit('form-submited', this.searchResult[this.searchResult.length - 1]) 
            // }

        },
        extractDataFromLocation(data) {
            console.log(data);
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
                    image: data.weather[0].main,
                    weather: data.weather[0].description,
                    wind: data.wind.speed * 2,
                    temp: data.main.temp,
                    humidity: data.main.humidity,
                    msg: `${data.name}, ${data.sys.country}`
                }
            }
        }
    }
}
</script>

<style lang="sass">
@import "@/assets/sass/_variables.sass"

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
        height: 2.5em
        margin: .5em
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

.searchResults-group
    opacity: 0
    transform: translateY(20px)
    position: absolute
    bottom: 6.9em
    width: calc( 100% - 3em )
    background: $c_bg
    padding: .5em .55em
    border-radius: 15px
    box-shadow: $shadow
    z-index: 0
    transition: .3s
    &.active
        z-index: 10 
        transform: translateY(0)
        opacity: 1

.search-item
    width: 100%
    margin: auto
    background: #fff
    padding: 1.25em
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px
    border-radius: 11px
    margin: .5em 0
    // background: lighten($c_dark, 50)
    // background: $c_bg
    transition: .3s
    cursor: pointer

    &:hover
        background: lighten($c_bg, 18)
</style>