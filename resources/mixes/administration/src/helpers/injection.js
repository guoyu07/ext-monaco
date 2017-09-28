import monaco from '../components/monaco';

export default {
    install(instance) {
        instance.vue.component('monaco', monaco);
    },
};