<script setup>
    //const emit = defineEmits(['change', 'delete'])
    const props = defineProps(['items', 'caption', 'class', 'actions', 'subComs',]);
    const vueSubComs = (props.subComs || []).map(path => defineAsyncComponent({
        loader: window.__allComponents[path],
        timeout: 3000,
        delay: 200,
    }));

    const actions = [
        {
            type: 'button',
            title: 'Create Job',
            class: 'btn btn-primary me-3',
            icon: 'bi bi-plus-circle-fill fs-1',
        },
        //{
        //    type: 'button',
        //    title: 'Stop Jobs',
        //    class: 'btn btn-danger me-3',
        //    icon: 'bi bi-stop-fill fs-1',
        //},
        {
            type: 'dropdown',
            title: 'Stop Jobs',
            class: 'btn btn-danger',
            icon: 'bi bi-stop-fill fs-1',
            items: [
                {
                    title: 'Search URL',
                    value: 'SEARCH_URL',
                },
                {
                    value: '{HR}',
                },
                {
                    title: 'Sign Out',
                    value: 'SIGN_OUT',
                },
            ],

            arrowHide: true,
            subOpen: false,
            subAlignment: 'end-0',
        },
    ];
</script>

<template>
    <!--begin::Card-->
    <div class="card pt-4 mb-6 mb-xl-9">
        <KitToolbar :caption="props.caption" :actions="actions" />

        <!--begin::Card body-->
        <div id="kt_customer_view_payment_method" class="card-body pt-0">
            <KitBreadcrumb :actions="actions"/>

            <div v-for="(it,ix) in list" class="py-0" data-kt-customer-payment-method="row">

                <!--begin::Header-->
                <div class="py-3 d-flex flex-stack flex-wrap">
                    <!--begin::Toggle-->
                    <div :class="(it.subOpen?'active':'')+' d-flex align-items-center collapsible collapsed rotate'"
                         data-bs-toggle="collapse" href="#kt_customer_view_payment_method_2"
                         role="button" aria-expanded="false" aria-controls="kt_customer_view_payment_method_2">
                        <!--begin::Arrow-->
                        <div v-if="it.subIcon" @click="subToggleClick(it)"
                             class="me-3 rotate-90">
                            <span class="svg-icon svg-icon-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                                </svg>
                            </span>
                        </div>
                        <!--end::Arrow-->
                        <!--begin::Logo-->
                        <!--<KitImage src="/assets/media/svg/card-logos/visa.svg" class="w-40px me-3" alt="" />-->
                        
                        <i v-if="ix==1" class="bi bi-exclamation-circle fs-1 me-3 text-danger"></i>
                        <i v-else class="bi bi-check2-circle fs-1 me-3 text-success"></i>

                        <!--end::Logo-->
                        <!--begin::Summary-->
                        <div class="me-3">
                            <div class="d-flex align-items-center">
                                <div class="text-gray-800 fw-bolder fs-3">
                                    {{it.title}}
                                </div>
                            </div>
                            <div class="text-muted">Expires Feb 2022</div>
                        </div>
                        <!--end::Summary-->
                    </div>
                    <!--end::Toggle-->
                    <!--begin::Toolbar-->
                    <!--end::Toolbar-->
                </div>
                <!--end::Header-->
                <!--begin::Body-->
                <div :class="(it.subOpen?'show':'')+' collapse fs-6 ps-10'">

                    <!--begin::Details-->
                    <div class="d-flex flex-wrap py-5">
                        <!--begin::Col-->
                        <div v-for="(vs,ix) in vueSubComs" class="flex-equal me-5">
                            <component :is="vueSubComs[ix]"></component>
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Details-->


                </div>
                <!--end::Body-->



            </div>
        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->
</template>

<script>
    import KitTable from './KitTable.js'
    export default { mixins: [KitTable] }
</script>