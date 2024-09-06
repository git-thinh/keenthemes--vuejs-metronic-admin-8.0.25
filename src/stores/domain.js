
export const useDomainStore = defineStore({
    id: 'domain',
    state: () => ({
        domainLangs: {
            "www.mascot.dk": ["da"],
            "www.mascot.de": ["de"],
            "www.mascotworkwear.co.uk": ["en"],
            "www.mascotworkwear.com": ["en-US"],
            "www.mascotworkwear.no": ["no"],
            "www.mascotworkwear.co.nz": ["en-NZ"],
            "www.mascotworkwear.ie": ["en-IE"],
            "www.mascotworkwear.com.au": ["en-AU"],
            "www.mascot.nl": ["nl"],
            "www.mascot.pl": ["pl"],
            "www.mascot.es": ["es"],
            "www.mascotworkwear.it": ["it"],
            "www.mascot.se": ["sv"],
            "www.mascot.fi": ["fi"],
            "www.mascot.fr": ["fr"],
            "www.mascot.cl": ["es-CL"],
            "www.mascot.be": ["nl-BE", "fr-BE"],
            "www.mascot.at": ["de-AT"],
            "www.mascotworkwear.ch": ["de-CH", "fr-CH"]
        },
    }),
    getters: {
        items_uiTable_MD: (state) => {
            const a = Object.keys(state.domainLangs)
                .map((x,k) => {
                    return {
                        title: x,

                        id: x,
                        keys: state.domainLangs[x] || [],

                        subIcon: true,
                        subOpen: k == 0,
                        subComponents: ['./kits/KitListKV.vue']
                    };
                });
            
            return a;
        },        
    },
    actions: {},
})