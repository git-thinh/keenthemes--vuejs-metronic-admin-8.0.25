<template>
    <KitTable 
              :caption="'Mascot Jobs'"
              :AddNewTitle="'Create Job'"
              :items="domainStore.items_uiTable_MD"
              :subComs="subComs"/>
</template>

<script setup>
    const domainStore = useDomainStore();
    const subComs = [
        './kits/KitListKV.vue'
    ];
</script>