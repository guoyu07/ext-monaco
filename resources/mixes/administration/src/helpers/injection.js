import monaco from '../components/monaco';

export default {
    install(instance) {
        instance.Vue.component('monaco', monaco);
    },
    type: 'addon',
};