export default {
    data() {
        const item = this.item || {};
        return {
            obj: { ...item },
        };
    },
    computed: {
        items() {
            return this.obj.items || [];
        },
        btnClass() {
            return 'btn dropdown-toggle' + (this.obj.subOpen ? ' show' : '') +
                (this.obj.arrowHide ? ' remove-arrow' : '');

        },
        mnClass() {
            return 'dropdown-menu' + (this.obj.subOpen ? ' show ' : ' ') + 
                (this.obj.subAlignment || '');
        },
    },
    methods: {
        subItemClick(mn) {
            this.obj.subOpen = false;
            console.log('subItemClick =', mn);
        },
        subToggleClick() {
            const val = !this.obj.subOpen;
            this.obj.subOpen = val;
            console.log('subToggleClick =', val);
        },
    }
}