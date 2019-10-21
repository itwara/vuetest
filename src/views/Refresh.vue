<template>
  <div class="hello">
    <a>{{msg}}</a>
  </div>
</template>

<script>
// import * as utils from '@/utils'
import { mapGetters } from 'vuex'

export default {
  name: 'Refresh',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapGetters([
      'refreshId'
    ])
  },
  mounted () {
    console.log(this.refreshId)
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
