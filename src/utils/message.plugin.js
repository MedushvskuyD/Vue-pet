export default {
  install(Vue) {
    Vue.prototype.$message = function(html) {
      this.$M.toast({html})
    }

    Vue.prototype.$error = function(test) {
      this.$M.toast({html: `[Ошибка]: ${test}`})
    }
  }
}