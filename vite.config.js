import path from 'path'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
import { defineConfig, loadEnv } from 'vite'

// https://github.com/unplugin/unplugin-auto-import
// https://stackoverflow.com/questions/76228523/how-to-import-local-global-types-with-unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

// https://github.com/unplugin/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'

// https://icon-sets.iconify.design/solar/add-circle-linear/
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import storeConfig from './src/stores/_config'

const PATH_SRC = path.resolve(__dirname, 'src');
//console.log('PATH_SRC =', PATH_SRC);

export default defineConfig(({ mode }) => {
    // mode = development | production (build)
    const NODE_ENV = process.env.NODE_ENV;
    console.log(`NODE_ENV = ${NODE_ENV} | mode = ${mode}`);

    const envValue = {
        __mode__: JSON.stringify(mode),
    };

    //const env = loadEnv('mock', process.cwd(), '');
    //const processEnvValues = { 'process.env': Object.entries(env).reduce((prev, [key, val]) => { return { ...prev, [key]: val, } }, {},) };
    //const processEnvValues = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
    //console.log('processEnvValues =', processEnvValues);

    return {
        root: PATH_SRC,
        define: envValue,
        logLevel: mode == 'production' ? 'error' : 'info', //info,error,silent
        plugins: [
            Vue({
                include: [/\.vue$/, /\.md$/],
            }),
            Icons(),
            Components({
                dirs: [
                    'layouts',
                    'kits',
                    'components',
                    'components/**'
                ],
                extensions: ['vue', 'md', 'svg'],
                directoryAsNamespace: true,
                dts: true,
                globalNamespaces: ['global'],
                include: [/\.vue($|\?)/, /\.md($|\?)/],
                resolvers: [
                    (name) => {
                        if (name === 'MyCustom')
                            return path.resolve(__dirname, 'src/CustomResolved.vue')
                                .replaceAll('\\', '/');                        
                    },
                    IconsResolver({
                        componentPrefix: 'i',
                    }),
                ],
            }),
            AutoImport({
                // targets to transform
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                    /\.md$/, // .md
                ],

                // global imports to register
                imports: [
                    // presets
                    'vue', // import { onMounted, onUnmounted, ref, computed, defineComponent } from 'vue';
                    'vue-router', // import { useRoute } from 'vue-router';
                    'pinia', // import { defineStore, acceptHMRUpdate } from 'pinia'
                    storeConfig,
                ],

                // Auto import for module exports under directories
                // by default it only scan one level of modules under the directory
                dirs: [
                    // './hooks',
                    // './composables' // only root modules
                    // './composables/**', // all nested modules
                    // ...
                ],

                // Custom resolvers, compatible with `unplugin-vue-components`
                // see https://github.com/antfu/unplugin-auto-import/pull/23/
                resolvers: [],
            }),
        ],
        resolve: {
            alias: {
                '@': PATH_SRC,
                //'^': `${root}/src/${projectDir}/${projectCode}`,
                //'^runtimejs': path.resolve(__dirname, './src/runtime/js'),
            },
        },
        build: {
            minify: true,
            emptyOutDir: true,
            outDir: '../dist',
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        let extType = assetInfo.name.split('.').at(1);
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                            extType = 'img';
                        } else if (/woff|woff2/i.test(extType)) {
                            extType = 'font';
                        }
                        //return `${extType}/[name]-[hash][extname]`;
                        return `${extType}/[name][extname]`;
                    },
                    //chunkFileNames: 'js/[name]-[hash].js',
                    //entryFileNames: 'js/[name]-[hash].js',
                    chunkFileNames: 'js/[name].js',
                    entryFileNames: '[name].js',
                },
            },
            sourcemap: false,
            // Reduce bloat from legacy polyfills.
            target: 'esnext',
        },
        server: {
            port: 5123
        }
    }
});