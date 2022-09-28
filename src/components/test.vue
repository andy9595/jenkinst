<template>
  <div @click="clickTest">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    dispatch (componentName, eventName, params) {
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
    clickTest(){
      // this.dispatch('aaa','clickTest',this)
      this.$parent.$emit('clickTest')
    },
  },

}
</script>

<style>
</style>