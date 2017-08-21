# VueAwesome

FontAwesome 5 integration for Vue.js

Make sure to `npm run postinstall` after any install or uninstall to relink the `@fortawesome/fontawesome` package!

### Example of use

In your initialization code:
```js
import Vue from 'vue/dist/vue.esm';
import VueAwesome from '@sethb0/vueawesome/vueawesome.esm';

Vue(VueAwesome);
```

Example component:
```js
import { faQuestionCircle } from '@fortawesome/fontawesome-solid';

export default {
  template: `
<div>
  <p>It's just a <i v-html="question"></i> of time.</p>
  <p>A really big <i v-html="bigQuestion"></i></p>
  <p>A simple <i v-html="faQuestionCircle"></i></p>
</div>`,
  fontawesome: {
    question: faQuestionCircle,
    // passing options:
    bigQuestion: [faQuestionCircle, { classes: ['fa-3x'] }],
    // use ES6 shorthand properties for maximum concision
    faQuestionCircle
  }
}
```
