<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
    </ul>
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