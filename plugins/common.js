import Vue from "vue";

import * as VeeValidate from "vee-validate";
import fr from "vee-validate/dist/locale/fr.json";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { localize } from "vee-validate";

Vue.use(VeeValidate);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize("fr", fr);
