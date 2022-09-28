<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'myTest',
  created(){
    this.$on('clickTest',function(){
      
    })
  },
  methods: {
      dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    // broadcast(componentName, eventName, params) {
    //   broadcast.call(this, componentName, eventName, params);
    // }
  }
}
</script>

<style>

</style>