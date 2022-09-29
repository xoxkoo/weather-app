<template>
  <WeatherHeader :city="data.name + ', ' + data.country"></WeatherHeader>
  <main class="main-content">
      <img :src="weatherImage" alt="" class="current-weather-img">
      <h1 class="weather-info">{{capitalize(weatherInfo)}}</h1>
      <InfoGroup :data="data" ></InfoGroup>
  </main>
  <PartModal @change-data="changeData($event)"></PartModal> 

</template>

<script>
import WeatherHeader from "@/components/WeatherHeader.vue"
import PartModal from "@/components/PartModal.vue"
import InfoGroup from "@/components/InfoGroup.vue"

export default {
name: 'WeatherView',
data() {
    return {
      data: {},
      weatherInfo: 'sunny',
      weatherImage: require('../assets/img/sun.png')
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
      this.data = data
      this.$emit('change-data', this.data)
      this.weatherInfo = data.weather
      this.weatherImage = require(`../assets/img/${this.lowercase(data.image)}.png`)
    }
},
components: {
    PartModal, InfoGroup, WeatherHeader
  }
}
</script>

<style lang="sass">
.current-weather-img
    width: auto
    height: 17vh
    margin-left: 50%
    transform: translateX(-50%)

.weather-info
    font-size: 2.5rem
    text-align: center
    font-weight: 600
</style>