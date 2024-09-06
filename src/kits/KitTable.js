export default {
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