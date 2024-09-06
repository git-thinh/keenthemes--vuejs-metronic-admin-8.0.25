<template>
    <img :src="src" :class="class" :alt="alt" />
</template>

<script>
    export default {
        props: {
            alt: {
                type: String,
                required: false
            },
            src: {
                type: String,
                required: false
            },
            class: {
                type: String,
                required: false
            }
        }
    }
</script>