import Vue from "vue";

import VueCookies from 'vue-cookies-reactive';
import moment from "moment";

Vue.use(VueCookies);

moment.locale(Vue.$cookies.get("karma_language") || 'en');
