<template lang="jade">
  div#app
    router-view  
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App',
  data() {
    return {      
    }
    
  }
}
</script>

<style lang="less">
#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}
</style>
