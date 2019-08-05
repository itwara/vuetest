<template>
  <div class="hello">
    <a>{{msg}}</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    console.log('mounted')
    if (process.env.NODE_ENV === 'development') {
      this.msg = 'development'
    } else {
      this.msg = 'production'
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
