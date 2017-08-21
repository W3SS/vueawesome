import fontawesome from '@fortawesome/fontawesome';

export default class VueAwesome {
  static install (Vue) {
    function defineReactive (vm, key, val) {
      if (key in vm) {
        vm[key] = val;
      } else {
        Vue.util.defineReactive(vm, key, val);
      }
    }

    const strategies = Vue.config.optionMergeStrategies;
    strategies.fontawesome = strategies.methods;
    Vue.mixin({
      created () {
        const awesome = this.$options.fontawesome;
        if (awesome) {
          Object.entries(awesome).forEach(([k, v]) => {
            const h = Array.isArray(v);
            const icon = h ? v[0] : v;
            const html = fontawesome.icon(icon, h && v[1]).html[0];
            defineReactive(this, k, html);
          });
        }
      },
    });
  }
}
