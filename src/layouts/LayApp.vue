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
                const layout = route?.meta?.layoutComponent || 'div';
                console.log('[ LayApp ] layout =', layout?.__file);
                return layout;
            });
            return {
                layout,
            };
        },
    });
</script>