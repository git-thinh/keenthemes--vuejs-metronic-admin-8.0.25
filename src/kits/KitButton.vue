<script setup>
    const props = defineProps(['item']);
</script>
<template>
    <button type="button" :class="obj.class" @click="buttonClick()">
        <i :class="obj.icon"></i>{{obj.title}}
    </button>
</template>
<script>
    import KitButton from './KitButton.js'
    export default { mixins: [KitButton] }
</script>