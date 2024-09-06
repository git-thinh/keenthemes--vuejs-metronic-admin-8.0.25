<template>
    <component :is="vueCom"></component>
</template>
<script>
    //defineProps({ name: String });
    export default {
        props: {
            name: {
                type: String,
                default: 'div',
                required: false
            },
        },
        setup(props, context) {
            const name = props.name || 'div';
            console.log('[ KitLoader ] name =', name);
            const vueCom = defineAsyncComponent(() => import(name))
            console.log('[ KitLoader ] vue =', vueCom);
            return {
                vueCom,
            };
        }
    }
</script>