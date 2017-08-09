<template>
  <div style="position:relative">
    <slot></slot>
    <div class="touch-ripple"></div>
  </div>
</template>

<script>
  const touchripple = require('./touchripple')
  export default {
    name: 'touch-ripple',
    ready() {
      this.initialize()
    },
    mounted() {
      this.initialize()
    },
    beforeDestroy() {
      if (this.$el) {
        if("ontouchend" in document)
          this.$el.removeEventListener('touchstart', touchripple.handleTouchStart)
        else 
          this.$el.removeEventListener('mousedown', touchripple.handleMouseDown)
      }
    },
    methods: {
      initialize() {
        if (this.$el) {
          // console.log(this, this.$el.ontouchstart)
          // this.$el.addEventListener('mousedown', touchripple.handleMouseDown)
          // todo: 利用hammer.js解决移动端触发问题  
          
          if ("ontouchend" in document) {
            this.$el.addEventListener('touchstart', touchripple.handleTouchStart)
          } else {
            this.$el.addEventListener('mousedown', touchripple.handleMouseDown)
          }
        }
      }
    }
  }
</script>
