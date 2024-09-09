export default {
    //props: {
    //    //'subComs', 'items', 'caption', 'class', 'AddNewTitle'
    //    subComs: {
    //        type: Array,
    //        default: [],
    //        required: false
    //    },
    //    items: {
    //        type: Array,
    //        default: [],
    //        required: false
    //    },
    //    caption: {
    //        type: String,
    //        required: false
    //    },
    //    class: {
    //        type: String,
    //        required: false
    //    },
    //    AddNewTitle: {
    //        type: String,
    //        default: 'Add new',
    //        required: false
    //    },
    //},
    //setup(props) {
    //    //const name = '@/kits/KitListKV.vue';
    //    //const SubVue = defineAsyncComponent(() => import(name))
    //    //console.log('SubVue =', SubVue);
    //    //return { SubVue };

    //    const pathSubComs = props.subComs || [];
    //    console.log('pathSubComs =', pathSubComs);
    //    const allComponents = window.__allComponents;
    //    //const vueSubComs = pathSubComs.map(path => allComponents[path]);
    //    const vueSubComs = pathSubComs.map(path => defineAsyncComponent({
    //        loader: allComponents[path],
    //        //loadingComponent: AsyncLoading,
    //        //errorComponent: AsyncError,
    //        timeout: 3000,
    //        delay: 200, // Delay before showing the loading component. Default: 200ms.
    //    }));
    //    console.log('vueSubComs =', vueSubComs);
    //    return { vueSubComs };
    //},
    data() {
        return {
            list: {...this.items},
        };
    },
    created() {
        //console.log('KitTable created: list =', this.list);
    },
    methods: {
        subToggleClick(it) {
            const val = !it.subOpen;
            it.subOpen = val;
            //it.subComponents = [val ? 'KitListKV' : 'div'];
            //console.log('vueSubComs =', this.vueSubComs);
        },
        submit() {
            alert('submit')
        },
        listen() {
            console.log("hii guys")
        }
    }
}