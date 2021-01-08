import Vuex from 'vuex';
import Vue from 'vue';
import contacts from './modules/contacts';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    contacts
  }
});
