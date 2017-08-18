# VueAwesome

FontAwesome 5 integration for Vue.js

Make sure to `npm run postinstall` after any install or uninstall to relink the `@fortawesome/fontawesome` package!

### Example of use

```vue
<template>
  <p>It's just a <i v-html="question"></i> of time.</p>
  <p>A really big <i v-html="bigQuestion"></i></p>
  <p>An unanswered <i v-html="faQuestionCircle"></i></p>
</template>

<script>
import { faQuestionCircle } from '@fortawesome/fontawesome-solid';

export default {
  fontawesome: {
    question: faQuestionCircle,
    // passing options:
    bigQuestion: [faQuestionCircle, { classes: ['fa-3x'] }],
    // use ES6 shorthand properties for maximum concision
    faQuestionCircle
  }
}
</script>
```
