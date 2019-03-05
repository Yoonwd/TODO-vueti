import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#1c73ff',
    secondary: '#3cd1c2',
    accent: '#ffaa2c',
    error: '#f83e70'
  }
})
