export default {
    data() {
        const buttons = (this.actions || []).filter(x => x.type == 'button');
        const dropdowns = (this.actions || []).filter(x => x.type == 'dropdown');
        return {
            buttons: { ...buttons },
            dropdowns: { ...dropdowns },
        };
    },
    created() {
        //console.log('KitTable created: list =', this.list);
    },
    methods: {
        subItemClick(it, mn) {
            it.subOpen = false;
            console.log('subItemClick =', mn);
        },
        subToggleClick(it) {
            const val = !it.subOpen;
            it.subOpen = val;
            console.log('subToggleClick =', val);
        },
        submit() {
            alert('submit')
        },
        listen() {
            console.log("hii guys")
        }
    }
}