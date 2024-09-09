<script setup>
    //const emit = defineEmits(['change', 'delete'])
    const props = defineProps(['caption', 'actions',]);
    console.log('props.caption =', props.caption);
</script>
<template>
    <!--begin::Card header-->
    <div class="card-header pt-0 border-0">
        <div class="card-title">
            <h2 class="fw-bolder mb-0 me-2">
                {{props.caption}}
            </h2>

            <!--begin::Search-->
            <div class="d-flex align-items-center position-relative my-1">
                <i class="bi bi-search fs-3 position-absolute ms-6"></i>
                <input type="text" data-kt-filemanager-table-filter="search" class="form-control form-control-solid w-250px ps-15" placeholder="Search Files & Folders" />
            </div>
            <!--end::Search-->
        </div>

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
            <!--begin::Toolbar-->
            <div class="d-flex justify-content-end" data-kt-filemanager-table-toolbar="base">
                <KitButton v-for="it in buttons" :item="it"/>
                <KitDropdown v-for="it in dropdowns" :item="it"/>
            </div>
            <!--end::Toolbar-->
            <!--begin::Group actions-->
            <div class="d-flex justify-content-end align-items-center d-none" data-kt-filemanager-table-toolbar="selected">
                <div class="fw-bolder me-5">
                    <span class="me-2" data-kt-filemanager-table-select="selected_count"></span> Selected
                </div>

                <button type="button" class="btn btn-danger" data-kt-filemanager-table-select="delete_selected">
                    Delete Selected
                </button>
            </div>
            <!--end::Group actions-->
        </div>
        <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
</template>
<script>
    import KitToolbar from './KitToolbar.js'
    export default { mixins: [KitToolbar] }
</script>