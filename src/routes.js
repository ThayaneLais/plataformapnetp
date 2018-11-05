import Login from './components/login/Login.vue';
import Home from './components/home/Home.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/login', component: Login}
];