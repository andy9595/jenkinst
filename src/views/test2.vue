<template>
  <div>
    <div @click="co">123</div>
    <div>{{testName}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:'andy'
    }
  },
  methods:{
    co(){
      this.name='cindy'
    }
  },
  computed:{
    testName(){
      console.log('com')
      return this.name+1
    }
  },
  watch:{
    'name':{
      handler(){
        console.log('wathc')
      },
      immediate:true
    }
  }
}
</script>

<style>

</style>