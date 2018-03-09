Vue.directive('click-outside', {
  bind() {
    let self = this
    this.event = function (event) {
      self.vm.$emit(self.expression, event)
    }
    this.el.addEventListener('click', this.stopProp)
    document.body.addEventListener('click', this.event)
  },
  unbind() {
    this.el.removeEventListener('click', this.stopProp)
    document.body.removeEventListener('click', this.event)
  },

  stopProp(event) { event.stopPropagation() }
})
