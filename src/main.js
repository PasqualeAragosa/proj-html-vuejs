import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


library.add(faCartShopping, faCircleUser, faMagnifyingGlass, faChevronDown, faCheck, faFile, faUser, faFlag, faGear, faLifeRing, faDisplay, faSquareFacebook, faInstagram, faTwitter, faLinkedin)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
