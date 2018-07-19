// Modules
import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';

// Fonts
import '@/assets/fonts/inter-ui.css';

// Favicons
import '@/assets/favicons/favicons';

// Components
import TitleBar from '@/components/TitleBar';
import About from '@/components/About';
import SectionBox from '@/components/SectionBox';
import FooterBar from '@/components/FooterBar';
import CloseButton from '@/components/CloseButton';
import ProjectBox from '@/components/ProjectBox';

// Vue Imports
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.component('title-bar', TitleBar);
Vue.component('about', About);
Vue.component('section-box', SectionBox);
Vue.component('footer-bar', FooterBar);
Vue.component('close', CloseButton);
Vue.component('project-box', ProjectBox);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
