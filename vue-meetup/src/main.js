import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import AlertCmp from './components/Shared/Alert'
import {store} from './store'
import DateFilter from './filters/date'
import EditMeetupDetailsDialog from "./components/Meetup/Edit/EditMeetupDetailsDialog";
import EditMeetupDateDialog from "./components/Meetup/Edit/EditMeetupDateDialog";
import EditMeetupTimeDialog from "./components/Meetup/Edit/EditMeetupTimeDialog";
import RegisterDialog from "./components/Meetup/Registration/RegisterDialog";

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyChDFfy4K4thiNsCIHz68A3SP_cpAzyFnM',
      authDomain: 'meetup-17d88.firebaseapp.com',
      databaseURL: 'https://meetup-17d88.firebaseio.com',
      projectId: 'meetup-17d88',
      storageBucket: 'gs://meetup-17d88.appspot.com',
      appId: '1:810173492377:web:0c318d8b42270176409c08'
    })
    // cuando recarge verifique si el token del usuario es valido aun y logee auto
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
