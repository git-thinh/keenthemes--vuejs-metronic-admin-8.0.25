<script setup>

    //import AutoComponentsD from "../components.d.ts";
    //console.log('AutoComponentsD =', AutoComponentsD);

    // https://vuejs.org/guide/components/async.html

    //const emit = defineEmits(['change', 'delete'])
    const props = defineProps(['component',]);
    console.log('component =', props.component);

    //const vueSubCom = defineAsyncComponent(() => import(props.component));
    //const vueSubCom = import(props.component);
    //const vueSubCom = defineAsyncComponent({
    //    loader: () => import(props.component),
    //    //loadingComponent: AsyncLoading,
    //    //errorComponent: AsyncError,
    //    timeout: 3000,
    //    delay: 200, // Delay before showing the loading component. Default: 200ms.
    //});
    //console.log('vueSubCom =', vueSubCom);
</script>
<template>
    <transition name="fade" mode="out-in">
        <component ref="asyncComponent"
                   :is="asyncComponent"
                   v-bind.sync="$attrs"
                   @reload="getComponent"
                   v-on="$listeners" />
    </transition>
</template>

<script>
    import AsyncLoading from "./KitLoading.vue";
    import AsyncError from "./KitError.vue";

    export default {
        name: "KitAsyncComponent",
        inheritAttrs: false,
        //props: {
        //    component: {
        //        type: Function,
        //        required: true
        //    }
        //},
        data() {
            return {
                asyncComponent: null
            };
        },
        mounted() {
            this.getComponent();
        },
        methods: {
            getComponent() {
                const path = this.component;
                //const v = defineAsyncComponent(() => import(path))
                console.log('vue =', path);
                //console.log('all =', getCurrentInstance().appContext.components);
                //console.log('all =', window.__app._context.components);

               
                //this.asyncComponent = defineAsyncComponent({
                //    loader: () => import(`${path}`),
                //    loadingComponent: AsyncLoading,
                //    errorComponent: AsyncError,
                //    timeout: 3000,
                //    delay: 200, // Delay before showing the loading component. Default: 200ms.
                //});
            }
        }
    };
</script>