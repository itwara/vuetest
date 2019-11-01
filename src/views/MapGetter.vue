<template>
  <div class="hello">
    <a>{{productId}}</a>
  </div>
</template>

<script>
// import * as utils from '@/utils'
import { mapGetters } from 'vuex'

export default {
  name: 'MapGetter',
  computed: {
    ...mapGetters([
      'productId'
    ])
  },
  beforeCreate () {
    console.log('mapGetter: beforeCreate')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
