<template>
  <router-view @change-data="changeData($event)"></router-view>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      data: {},
    }
  },
  methods: {
    capitalize: (string) => {
      if(string != "")
        return string.charAt(0).toUpperCase() + string.slice(1)
    },
    lowercase: (string) => {
      if(string != "")
        return string.toLowerCase()
    },
    changeData(data) {
      console.log(data);
      this.data = data
      this.weatherInfo = data.weather
      this.weatherImage = require(`./assets/img/${this.lowercase(data.image)}.png`)
    }
  }
}
</script>

<style lang="sass">
  @import '@/assets/sass/base.sass'
  header
    width: 100%
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
