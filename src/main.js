import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCirclePlay, faCalendarDays, faTrophy, faCircleInfo, faCircleExclamation)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon),

  Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
