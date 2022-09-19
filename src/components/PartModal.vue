<template>
  <div class="modal">
    <div class="forecast-group">
        <ForecastItem v-for="index in 4" :key="index"></ForecastItem>
    </div>
    <div class="searchResults-group" :class="{ active: locations.length }">
        <div class="search-item" v-for="location in locations" :key="location">{{location}}</div>
    </div>
    <form action="#" @submit.prevent="getLocation()">
        <label for="search" class="form-group">
            <img src="../assets/img/location-2969395.png" alt="image" >
            <label for="search" class="label">Enter Location</label>
            <input v-model="input" type="text" class="input" id="search" name="search" @focus="focusHandler($event)" @focusout="focusHandler($event)">
            <button class="btn btn-primary" type="submit">search</button>
        </label>
    </form>
</div>
</template>

<script>
import ForecastItem from './ForecastItem.vue'

import axios from 'axios'

export default {
    name: "PartModal",
    data() {
        return {
            items: ['', '', ''],
            input: '',
            apiKey: 'n5Sme4fIP18KlbuwOfEPZGWwqfssaxsx',
            locations: []
        }
    },
    methods: {
        focusHandler: (event) => {
            const targetName = event.target.name;
            const label = document.querySelector(".label", `for="${targetName}"`);
            if (event.type !== "focusout") {
                label.classList.add("active");
            }
            else if (event.target.value == "")
                label.classList.remove("active");
        },
        getLocation() {
            axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.input}`)
            .then(response => {
                this.locations = []
                response.data.forEach(location => {
                    this.locations.push( this.extractDataFromLocation(location) )
                });
            })
            .catch(err => {
                this.locations = []
                this.locations.push('No results found 🙁')
                console.log(err);
            })
        },
        extractDataFromLocation(data) {
            let location = `${data.EnglishName}, ${data.Country.EnglishName}`
            return location

        }
    },
    components: { ForecastItem }
}
</script>

<style lang="sass">
@import "@/assets/sass/_variables.sass"
.modal
    // position: absolute
    // bottom: 0
    padding: 1.5em
    width: 100%
    height: 100%
    background: #fff
    border-radius: 2em

.forecast-group
    display: flex
    justify-content: space-between

.searchResults-group
    opacity: 0
    transform: translateY(20px)
    position: absolute
    bottom: 6.9em
    width: calc( 100% - 3em )
    background: #fff
    padding: .5em .55em
    border-radius: 15px
    box-shadow: $shadow
    z-index: 100
    transition: .3s
    &.active
        transform: translateY(0)
        opacity: 1

.search-item
    width: 100%
    margin: auto
    background: #fff
    padding: .7em 2em
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px
    border-radius: 11px
    margin: .5em 0
    // background: lighten($c_dark, 50)
    // background: $c_bg
    transition: .3s

    &:hover
        background: lighten($c_bg, 20)

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