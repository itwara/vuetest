<template>
  <div id="app">
    <img src="./assets/logo.png" @click="alertU">
    <h  v-for="elem in elems" :name="elem.name" :key="elem.id" ref="hello" >
      <!-- <div slot="intro">my name is {{elem.name}}</div> -->
      <!-- <div slot="intro"></div> -->
      lllllll
    </h>
    <textarea name="" ref="textarea" id="" cols="30" rows="10"></textarea>
    <h name="dd"></h>
    <input type="text" ref="input" value="sddf" @input="handleInput">
    <wb-hello name="plugin"></wb-hello>
    <div v-test:hello.a.b="message"></div>
    <div v-test-1:hello.a.b="message"></div>
    <span v-pre>{{ this will not be compiled }}</span>
    <div v-cloak>
      {{ message }}
    </div>

  </div>
</template>

<script>
import hello from './components/hello.vue';
import emitter from './mixins/emitter.js';
//console.info(hello);
/**
 * 全局注册
 */
// import Vue from 'vue';
// Vue.component('h', hello);

var mixin = {
  methods:{
    alertU:function(){
      alert('dd');
    }
  },
  created:function(){
    // console.log(1)
  },
}


export default {
  name: 'app',

  /**
   * 局部注册
   */
  components:{
    'h':hello
  },
  mixins:[mixin,emitter],
  data () {
    return {
      elems:[
        {name:'andy1',id:0},
        {name:'tom1',id:1},
        {name:'jane1',id:2},
      ],
      message:'qwer1'
    }
  },
  methods:{
    // alertU:function(){
    //   alert('ss');
    // }
    handleInput:function(val){
      console.info('h');
    }
  },
  created: function () { 
    // console.log(this.$options);
    // console.log(2) 
    // console.log(this.$refs.textarea);
    //this.$sayHello();
  },
  mounted: function(){
    // console.info(this.$refs.input.select());
    // console.info(this.$refs.hello[0].$options.creatime);
    // console.info(this.$refs.hello[0].$options.props.name);
    // console.info(this.$refs.hello[0].$options.propsData.name);
    // this.$on('inputc',this.handleInput);
    this.$emit('input','hh');
    this.$sayHello();
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
