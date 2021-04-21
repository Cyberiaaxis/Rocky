window._ = require('lodash');
try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');
  
  require('bootstrap');
} catch (e) {}
// The axios part I might talk about
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;