<template>
    <component :is="layout">
        <router-view />
    </component>
</template>
<script>
    export default defineComponent({
        name: 'LayApp',
        setup() {
            const route = useRoute();
            const layout = computed(() => {
                const v = route?.meta?.layoutComponent || 'div';
                console.log('[ LayApp ] layout =', v?.__file || v);
                return v;
            });
            return {
                layout,
            };
        },
    });
</script>