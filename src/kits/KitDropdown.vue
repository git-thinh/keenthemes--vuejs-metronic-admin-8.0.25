<script setup>
    const props = defineProps(['item']);
</script>
<template>
    <div class="dropdown">
        <button @click="subToggleClick()" type="button" :class="btnClass">
            <i class="bi bi-person-circle fs-1"></i>
        </button>
        <ul :class="mnClass">
            <li v-for="mn in items">
                <hr v-if="mn.value=='{HR}'" class="dropdown-divider">
                <a v-else="" @click="subItemClick(mn)"
                   class="dropdown-item">{{mn.title}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
    import KitDropdown from './KitDropdown.js'
    export default { mixins: [KitDropdown] }
</script>