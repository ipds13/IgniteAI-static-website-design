import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/vue/server-renderer/index.mjs';
import { ref, useSSRContext, mergeProps } from 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/vue/index.mjs';
import { _ as _imports_0 } from './igniteAI-06-_Lf63WAh.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/renderer.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/h3/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/devalue/index.js';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/ufo/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/@unhead/ssr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/destr/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/hookable/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/klona/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/defu/dist/defu.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/scule/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/radix3/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/pathe/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/ohash/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/unhead/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isHidden = ref(false);
    const isMenuOpen = ref(false);
    const links = [
      { name: "Community", url: "https://t.me/igniteai" },
      { name: "Whitepaper", url: "https://github.com/IgniteAI-eth" },
      { name: "Linktree", url: "" }
      // { name: 'Linktree', url: 'https://x.com/myigniteai?s=21' },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        ref: "navbar",
        class: ["navbar shadow-lg rounded-lg fixed top-4 left-4 right-4 z-50 px-6 py-4 bg-opacity-10 bg-white dark:bg-white border border-white/10 transition-opacity duration-500", {
          "opacity-0 pointer-events-none": isHidden.value,
          "opacity-100": !isHidden.value
        }]
      }, _attrs))} data-v-e5461d0d><div class="container mx-auto flex justify-between items-center" data-v-e5461d0d><div class="flex items-center" data-v-e5461d0d><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="w-16 h-16 md:w-24 md:h-24" data-v-e5461d0d><h1 class="title title-lg text-white ml-4" data-v-e5461d0d><b data-v-e5461d0d>Ignite</b>AI</h1></div><div class="hidden md:flex items-center space-x-6" data-v-e5461d0d><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} class="font-bold text-xl text-white hover:text-gray-300 transition-colors" data-v-e5461d0d>${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--><a href="#" class="text-white px-6 py-2 text-4xl font-extrabold rounded" data-v-e5461d0d> BUY NOW </a></div><button class="md:hidden text-white focus:outline-none" data-v-e5461d0d><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-e5461d0d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-e5461d0d></path></svg></button></div>`);
      if (isMenuOpen.value) {
        _push(`<div class="absolute top-20 left-4 right-4 bg-white text-black p-4 rounded-lg shadow-lg flex flex-col space-y-4 text-center" data-v-e5461d0d><!--[-->`);
        ssrRenderList(links, (link) => {
          _push(`<a${ssrRenderAttr("href", link.url)} class="hover:text-gray-600" data-v-e5461d0d>${ssrInterpolate(link.name)}</a>`);
        });
        _push(`<!--]--><button class="bg-black text-white px-6 py-2 rounded" data-v-e5461d0d> BUY NOW </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e5461d0d"]]);
const _sfc_main$1 = {
  __name: "LoadingScreen",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      if (show.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading-overlay" }, _attrs))} data-v-23a003ec><div class="loading-spinner" data-v-23a003ec></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadingScreen.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const LoadingScreen = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23a003ec"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(LoadingScreen, null, null, _parent));
      if (!isLoading.value) {
        _push(`<div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">`);
        _push(ssrRenderComponent(Navbar, null, null, _parent));
        _push(`<main>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</main></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=default-B7UdA9up.mjs.map
