export default {
    //props: {
    //    items: {
    //        type: Array,
    //        default: [],
    //        required: false
    //    },
    //    caption: {
    //        type: String,
    //        required: false
    //    },
    //    AddNewTitle: {
    //        type: String,
    //        default: 'Add new',
    //        required: false
    //    },
    //    class: {
    //        type: String,
    //        required: false
    //    }
    //},
    //setup() {
    //    const name = '@/kits/KitListKV.vue';
    //    const SubVue = defineAsyncComponent(() => import(name))
    //    console.log('SubVue =', SubVue);
    //    return { SubVue };
    //},
    data() {
        return {
            //list: { ...this.items },
        };
    },
    created() {
        //console.log('KitTable created: list =', this.list);
    },
    methods: {
        submit() {
            alert('submit')
        },
        listen() {
            console.log("hii guys")
        }
    }
}