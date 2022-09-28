<template>
  <div>
    <slot ></slot>
  </div>
</template>

<script>
export default {
  props:['test'],
  created(){
    console.log(this.$slots.default)
    console.log(this.test)
  }
}
</script>

<style>

</style>