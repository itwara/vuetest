<template>
  <div class="hello">
    <div @click="onHelloClick">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    pageId () {
      console.log('hello: computed: pageId')
      console.log(this)
      return this.$route.query.id
    }
  },
  watch: {
    pageId () {
      console.log('hello: watch: pageId')
    }
  },
  mounted () {
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
  },
  methods: {
    onHelloClick () {
      this.$router.push({path: '/getter', query: { id: 123 }})
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
