<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>doublecount: {{doublecount}}</h2>
    <h2>count: {{count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    doublecount () {
      return this.$store.getters['hello/doublecount']
    },
    count () {
      return this.$store.state.hello.count
    }
  },
  mounted: function () {
    // console.log(this.$store)
    this.$store.dispatch('hello/fetchCount')
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

a {
  color: #42b983;
}
</style>
