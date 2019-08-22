<template>
  <div class="hello">
    <a>{{msg}}</a>
  </div>
</template>

<script>
import * as utils from '@/utils'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    console.log('mounted')
    console.log(utils.debounce)
    if (process.env.NODE_ENV === 'development') {
      this.msg = 'development'
    } else {
      this.msg = 'production'
    }
    if (process.env.SUB_VER === 'hap') {
      this.msg += ':hap'
    } else {
      this.msg += ':main'
    }
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
