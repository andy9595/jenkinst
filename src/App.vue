<template>
  <div id="app">
       <!-- <transition name="slide-left">
          <router-view/>
        </transition> -->
      <router-view/>
  </div>
</template>

<script>
export default {
  created(){
    console.log('app')
    sessionStorage.setItem('name','12312332')
    sessionStorage.setItem('name','12312332')
    sessionStorage.setItem('name','12312332')
  }
}
</script>
<style lang="scss">
#app {
  height: 100%; 
}
</style>
