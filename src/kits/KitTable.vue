<script setup>
    //const emit = defineEmits(['change', 'delete'])
    const props = defineProps(['subComs', 'items', 'caption', 'class', 'AddNewTitle',]);
    const pathSubComs = props.subComs || [];
    console.log('pathSubComs =', pathSubComs);
    //const vueSubComs = pathSubComs.map(path => defineAsyncComponent(() => import(path)));
    //console.log('vueSubComs =', vueSubComs);

    const allComponents = window.__allComponents;
    //const vueSubComs = pathSubComs.map(path => allComponents[path]);
    const vueSubComs = pathSubComs.map(path => defineAsyncComponent({
        loader: allComponents[path],
        //loadingComponent: AsyncLoading,
        //errorComponent: AsyncError,
        timeout: 3000,
        delay: 200, // Delay before showing the loading component. Default: 200ms.
    }));
    console.log('vueSubComs =', vueSubComs);

</script>

<template>
    <!--begin::Card-->
    <div class="card pt-4 mb-6 mb-xl-9">
        <!--begin::Card header-->
        <div class="card-header border-0">
            <!--begin::Card title-->
            <div class="card-title">
                <h2 class="fw-bolder mb-0">
                    {{caption}}
                </h2>
            </div>
            <!--end::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
                <a @click="submit()" class="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                    <span class="svg-icon svg-icon-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                            <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                            <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                    {{AddNewTitle}}
                </a>
            </div>
            <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->
        <!--begin::Card body-->
        <div id="kt_customer_view_payment_method" class="card-body pt-0">

            <div v-for="it in list" class="py-0" data-kt-customer-payment-method="row">

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
                        <KitImage src="/assets/media/svg/card-logos/visa.svg" class="w-40px me-3" alt="" />
                        <!--end::Logo-->
                        <!--begin::Summary-->
                        <div class="me-3">
                            <div class="d-flex align-items-center">
                                <div class="text-gray-800 fw-bolder">
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
                    <h3>?????</h3>

                    <!--begin::Details-->
                    <div class="d-flex flex-wrap py-5">
                        <!--begin::Col-->
                        <div v-for="(vs,ix) in pathSubComs" class="flex-equal me-5">
                            {{vs}}
                            <!--<SubVue :name="cm"></SubVue>-->
                            <!--<KitListKV/>-->
                            <component :is="vueSubComs[ix]"></component>
                            <!--<kit-async-component :component="vs"
                                                 example="Example Props"
                                                 @listen="listen" />-->
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
    export default {
        //props: {
        //    items: {
        //        type: Array,
        //        default: [],
        //        required: false
        //    },
        //    caption: {
        //        type: String,
        //        required: false
        //    },
        //    AddNewTitle: {
        //        type: String,
        //        default: 'Add new',
        //        required: false
        //    },
        //    class: {
        //        type: String,
        //        required: false
        //    }
        //},
        //setup() {
        //    const name = '@/kits/KitListKV.vue';
        //    const SubVue = defineAsyncComponent(() => import(name))
        //    console.log('SubVue =', SubVue);
        //    return { SubVue };
        //},
        mixins: [KitTable],
    }
</script>