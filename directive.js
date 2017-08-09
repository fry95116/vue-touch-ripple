const touchripple = require('./touchripple')

const GetCurrentStyle = function(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return getComputedStyle(obj, false)[attr]
  }
}

const directive = {
  bind: function (el) {
    var element = this ? (this.el ? this.el : el) : el
    // console.log(element)
    if (element) {
      var ripple = document.createElement('div')
      ripple.className = 'touch-ripple'
      element.appendChild(ripple)
      element.style.position = 'relative'
      // element.addEventListener('touchstart', touchripple.handleTouchStart)
      // element.addEventListener('mousedown', touchripple.handleMouseDown)
      if ("ontouchend" in document) {
        this.$el.addEventListener('touchstart', touchripple.handleTouchStart)
      } else {
        this.$el.addEventListener('mousedown', touchripple.handleMouseDown)
      }
    }
  },
  update: function (value) {
    // console.log(value)
  },
  unbind: function (el) {
    var element = this ? (this.el ? this.el : el) : el
    if (element) {
      // element.removeEventListener('mousedown', touchripple.handleMouseDown)
      // element.removeEventListener('touchstart', touchripple.handleTouchStart)
      if("ontouchend" in document) {
        this.$el.removeEventListener('touchstart', touchripple.handleTouchStart)
      }
      else {
        this.$el.removeEventListener('mousedown', touchripple.handleMouseDown)
      }
    }
  }
}

module.exports = directive
