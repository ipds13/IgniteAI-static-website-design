import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { ref, mergeProps, useSSRContext, unref } from "vue";
import gsap, { gsap as gsap$1 } from "gsap";
import ScrollTrigger, { ScrollTrigger as ScrollTrigger$1 } from "gsap/ScrollTrigger.js";
import { _ as _export_sfc } from "../server.mjs";
import AOS from "aos";
import "chart.js/auto";
import { _ as _imports_0$4 } from "./igniteAI-06-_Lf63WAh.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _imports_0$3 = "" + __buildAssetsURL("Slide-1-BG.C7mScQHv.mp4");
const _imports_1$2 = "" + __buildAssetsURL("slide-1.I_BQcPDw.png");
const _sfc_main$9 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const heroSection = ref(null);
    ref(null);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-section relative text-white py-16 md:py-20 opacity-0 transform translate-y-10",
        ref_key: "heroSection",
        ref: heroSection
      }, _attrs))} data-v-ab7d203b><div class="absolute inset-0 z-0" data-v-ab7d203b><video autoplay muted loop playsinline class="w-full h-full object-cover" data-v-ab7d203b><source${ssrRenderAttr("src", _imports_0$3)} type="video/mp4" data-v-ab7d203b> Your browser does not support the video tag. </video></div><div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left px-4 sm:px-6 lg:px-8 relative z-10" data-v-ab7d203b><div class="md:w-1/2 md:mt-0" data-v-ab7d203b><h1 class="title title-xl mb-4 mt-20 md:mb-6" data-v-ab7d203b> The Future of Intelligent AI Agents </h1><p class="subtitle subtitle-lg mb-6 md:mb-8" data-v-ab7d203b> IgniteAI delivers AI Agents that don’t just work—they adapt, learn, and empower. Transform complexity into simplicity and unlock new opportunities effortlessly. </p><div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0" data-v-ab7d203b><button class="cosmic-button cosmic-button-black" data-v-ab7d203b> Get Started Now </button></div><h2 class="subtitle subtitle-lg mt-6" data-v-ab7d203b> Smarter AI. Better Decisions. Infinite possibilities. </h2></div><div class="hidden md:block md:w-1/2" data-v-ab7d203b><img${ssrRenderAttr("src", _imports_1$2)} alt="AI Agents" class="w-[90%] lg:w-[1350%] max-w-5xl ml-auto" data-v-ab7d203b></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ab7d203b"]]);
const _imports_0$2 = "" + __buildAssetsURL("Slide-2-Coin.brYnbKvy.png");
const _sfc_main$8 = {
  __name: "WhyIgniteAI",
  __ssrInlineRender: true,
  setup(__props) {
    gsap$1.registerPlugin(ScrollTrigger$1);
    const valueProposition = ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "value-proposition py-16 md:py-20",
        ref_key: "valueProposition",
        ref: valueProposition
      }, _attrs))} data-v-b826776e><div class="container mx-auto px-6" data-v-b826776e><div class="flex flex-col md:flex-row items-center justify-between text-center md:text-left" data-v-b826776e><div class="md:w-1/3 flex justify-center md:justify-start opacity-0" data-v-b826776e><img${ssrRenderAttr("src", _imports_0$2)} alt="IgniteAI Logo" class="w-48 md:w-80" data-v-b826776e></div><div class="md:w-2/3 mt-8 md:mt-0 opacity-0 translate-y-10" data-v-b826776e><h1 class="text-3xl md:text-6xl lg:text-8xl font-extrabold mb-6 md:mb-8 text-white" data-v-b826776e> Why IgniteAI is the Future of AI Agents </h1><p class="text-lg md:text-2xl font-semibold mb-6 md:mb-8 text-white" data-v-b826776e> In a world overwhelmed by tools that can’t keep up, IgniteAI’s Intelligent AI Agents redefine what’s possible. These AI companions adapt to your needs, solve real-world challenges, and empower you to stay ahead—whether in finance, health, business, or creativity. </p><div class="bg-black border border-white border-3 rounded-lg shadow-lg p-6 md:p-4 flex flex-col md:flex-row md:space-x-6 lg:space-x-12 transition-all hover:shadow-xl opacity-0 translate-y-10" data-v-b826776e><div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 w-full text-left" data-v-b826776e><div class="flex items-center space-x-2" data-v-b826776e><div class="w-3 h-3 bg-white rounded-full" data-v-b826776e></div><h3 class="text-sm md:text-base font-semibold text-white" data-v-b826776e> AI that learns and evolves with you. </h3></div><div class="flex items-center space-x-2" data-v-b826776e><div class="w-3 h-3 bg-white rounded-full" data-v-b826776e></div><h3 class="text-sm md:text-base font-semibold text-white" data-v-b826776e> Practical, affordable, and scalable. </h3></div><div class="flex items-center space-x-2" data-v-b826776e><div class="w-3 h-3 bg-white rounded-full" data-v-b826776e></div><h3 class="text-sm md:text-base font-semibold text-white" data-v-b826776e> Designed to simplify complexity and amplify results. </h3></div></div></div><div class="flex justify-center mt-6 opacity-0 translate-y-10" data-v-b826776e><button class="cosmic-button cosmic-button-white" data-v-b826776e> Explore the Technology </button></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhyIgniteAI.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const WhyIgniteAI = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b826776e"]]);
const _imports_0$1 = "" + __buildAssetsURL("Slide-3-FinIgnite.CPCljKSf.png");
const _imports_1$1 = "" + __buildAssetsURL("Slide-3-MedIgnite.BImL8o77.png");
const _imports_2$1 = "" + __buildAssetsURL("Slide-3-EduIgnite.CPQy-icL.png");
const _imports_3 = "" + __buildAssetsURL("Slide-3-CreateIgnite.CCQKSM5S.png");
const _imports_4 = "" + __buildAssetsURL("Slide-3-BizIgnite.SzIqq86P.png");
const _imports_5 = "" + __buildAssetsURL("Slide-3-MetaIgnite.D99lkbIu.png");
const _sfc_main$7 = {
  __name: "MeetTheAIAgents",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "ai-agents py-20" }, _attrs))} data-v-7cdfe512><div class="container mx-auto px-6" data-v-7cdfe512><div class="text-center mb-16" data-v-7cdfe512><h2 class="text-6xl font-bold mb-4 text-white" data-v-7cdfe512> Your Personal AI Agents for Every Need </h2><p class="text-xl text-white opacity-90" data-v-7cdfe512> Experience Next-Gen AI Solutions Tailored For You </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-v-7cdfe512><div class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" data-v-7cdfe512><img${ssrRenderAttr("src", _imports_0$1)} alt="FinIgnite" class="w-full h-auto object-cover" data-v-7cdfe512></div><div class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" data-v-7cdfe512><img${ssrRenderAttr("src", _imports_1$1)} alt="MedIgnite" class="w-full h-auto object-cover" data-v-7cdfe512></div><div class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" data-v-7cdfe512><img${ssrRenderAttr("src", _imports_2$1)} alt="EduIgnite" class="w-full h-auto object-cover" data-v-7cdfe512></div><div class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" data-v-7cdfe512><img${ssrRenderAttr("src", _imports_3)} alt="CreateIgnite" class="w-full h-auto object-cover" data-v-7cdfe512></div><div class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" data-v-7cdfe512><img${ssrRenderAttr("src", _imports_4)} alt="BizIgnite" class="w-full h-auto object-cover" data-v-7cdfe512></div><div class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" data-v-7cdfe512><img${ssrRenderAttr("src", _imports_5)} alt="MetaIgnite" class="w-full h-auto object-cover" data-v-7cdfe512></div></div><div class="text-center" data-v-7cdfe512><button class="cosmic-button" data-v-7cdfe512>Try The Agents</button></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MeetTheAIAgents.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const MeetTheAIAgents = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7cdfe512"]]);
const _sfc_main$6 = {
  mounted() {
    AOS.init({
      duration: 800,
      // Durasi animasi
      once: true
      // Animasi hanya terjadi sekali
    });
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "problem-solution py-16 md:py-20" }, _attrs))} data-v-9d498208><div class="container mx-auto px-6" data-v-9d498208><h2 class="text-4xl sm:text-6xl md:text-8xl font-bold mb-12 md:mb-16 text-white text-center" data-aos="fade-up" data-v-9d498208> Why the World Needs IgniteAI </h2><div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-12 md:mb-16" data-v-9d498208><div class="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right" data-v-9d498208><h3 class="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white" data-v-9d498208> The Problem </h3><p class="text-lg sm:text-xl text-white leading-relaxed max-w-2xl mx-auto md:mx-0" data-v-9d498208> The world is overwhelmed by disconnected, inefficient tools that fail to adapt to personal or business needs. </p></div><div class="hidden md:block text-white text-6xl md:text-8xl font-bold" data-aos="fade-up" data-v-9d498208> / </div><div class="w-full md:w-1/2 text-center md:text-right" data-aos="fade-left" data-v-9d498208><h3 class="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white" data-v-9d498208> The Solution </h3><p class="text-lg sm:text-xl text-white leading-relaxed max-w-2xl mx-auto md:mx-0" data-v-9d498208> IgniteAI simplifies the chaos with intelligent, adaptive AI Agents designed to make life and business easier, smarter, and more effective. </p></div></div><div class="text-center" data-v-9d498208><p class="text-xl sm:text-2xl md:text-3xl font-bold text-white italic" data-aos="fade-up" data-v-9d498208> &quot;Stop juggling tools. Let IgniteAI do the heavy lifting for you.&quot; </p><button class="cosmic-button cosmic-button-white mt-8 md:mt-12" data-aos="fade-up" data-v-9d498208> Discover How We Help </button></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheProblemWeSolve.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TheProblemWeSolve = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9d498208"]]);
const _sfc_main$5 = {
  __name: "MarketOpportunity",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "market-opportunity py-20" }, _attrs))} data-v-33a94035><div class="container mx-auto px-6" data-v-33a94035><div class="text-center mb-16" data-aos="fade-up" data-v-33a94035><h2 class="text-8xl md:text-8xl font-bold mb-8 text-white" data-v-33a94035> The AI Revolution is Here<br data-v-33a94035><span class="text-teal-400" data-v-33a94035>And We&#39;re Leading It</span></h2></div><div class="flex flex-col lg:flex-row items-center gap-12 mb-16" data-v-33a94035><div class="w-full lg:w-2/3" data-aos="fade-right" data-v-33a94035><div class="bg-white/10 p-8 rounded-2xl backdrop-blur-lg" data-v-33a94035><canvas class="w-full h-96" data-v-33a94035></canvas></div></div><div class="w-full lg:w-1/3 text-left" data-aos="fade-left" data-v-33a94035><p class="text-xl text-white mb-8 leading-relaxed" data-v-33a94035> The global AI market is projected to reach <span class="text-teal-400 font-bold" data-v-33a94035>$1.8 trillion by 2030</span>. IgniteAI is positioned at the forefront of this revolution with groundbreaking AI Agents that redefine productivity, creativity, and innovation. </p><button class="cosmic-button" data-aos="fade-up" data-aos-delay="200" data-v-33a94035> Invest in IgniteAI </button></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarketOpportunity.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MarketOpportunity = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-33a94035"]]);
const _imports_0 = "" + __buildAssetsURL("Slide-6-7-lingkaran.DuTeCdC2.png");
const _sfc_main$4 = {
  __name: "HowIgniteAIWorks",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const roadmap = [
      {
        year: "2024-2025",
        description: "Building the foundation and community"
      },
      {
        year: "2025",
        description: "Launching the six AI Agents and scaling adoption"
      },
      {
        year: "Beyond",
        description: "Continuous innovation to stay ahead of the curve"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "how-it-works relative min-h-screen z-10" }, _attrs))} data-v-26586c29><div class="absolute inset-0 flex items-center justify-center z-0" data-v-26586c29><div class="cosmic-circle w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] max-w-[2000px] max-h-[2000px]" data-v-26586c29><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-contain animate-rotate" alt="Cosmic circle" data-v-26586c29></div></div><div class="relative z-10 container mx-auto h-screen flex items-center px-4 md:px-6" data-v-26586c29><div class="text-center w-full" data-v-26586c29><div class="mb-8 md:mb-12 opacity-0 translate-y-10" data-v-26586c29><div class="space-y-4 md:space-y-6 max-w-3xl mx-auto" data-v-26586c29><a href="https://github.com/IgniteAI-eth" class="cosmic-button w-full md:w-auto" data-v-26586c29> Learn More About the Tech </a><p class="text-base md:text-xl text-gray-300 leading-relaxed" data-v-26586c29> IgniteAI combines advanced machine learning, intuitive design, and secure architecture to deliver AI Agents that anyone can use. </p><hr class="bg-gray-100 h-1 md:h-2 my-4 md:my-6" data-v-26586c29><p class="text-base md:text-xl text-gray-300 leading-relaxed" data-v-26586c29> Each agent is tailored for specific needs, providing seamless and highly personalized experiences. </p><p class="text-xl md:text-3xl font-bold text-white mt-6 md:mt-8" data-v-26586c29> Secure • Scalable • Built for everyone </p></div></div><div class="pt-8 md:pt-12 opacity-0 translate-y-10" data-v-26586c29><h2 class="text-4xl md:text-8xl font-bold mb-6 md:mb-8 text-white" data-v-26586c29> From Vision to Reality </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto" data-v-26586c29><!--[-->`);
      ssrRenderList(roadmap, (item, index) => {
        _push(`<div class="p-4 md:p-6 bg-black/30 backdrop-blur-lg rounded-xl border border-white/10" data-v-26586c29><h3 class="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4" data-v-26586c29>${ssrInterpolate(item.year)}</h3><p class="text-sm md:text-base text-gray-300" data-v-26586c29>${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div><p class="text-lg md:text-2xl font-semibold text-white mt-6 md:mt-8 italic" data-v-26586c29> &quot;Our journey to shape the future of AI is just beginning.&quot; </p><button class="mt-6 md:mt-8 cosmic-button w-full md:w-auto" data-v-26586c29> See the Full Roadmap </button></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowIgniteAIWorks.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HowIgniteAIWorks = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-26586c29"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "roadmap relative py-20" }, _attrs))} data-v-500ec8b2><div class="container mx-auto mb-20 text-center" data-v-500ec8b2><h2 class="text-8xl md:text-8xl font-bold text-white" data-v-500ec8b2> Powered by Cutting-Edge AI Technology </h2></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Roadmap.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Roadmap = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-500ec8b2"]]);
const _sfc_main$2 = {
  __name: "FinalCallToAction",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "final-cta text-white py-20",
        "data-aos": "fade-up",
        "data-aos-duration": "1000"
      }, _attrs))} data-v-6b504637><div class="container mx-auto text-center mt-64" data-v-6b504637><h2 class="text-9xl font-extrabold mb-8" data-aos="zoom-in" data-aos-duration="1200" data-v-6b504637> Join the Future of AI Agents Today </h2><p class="text-2xl font-semibold my-8" data-aos="fade-up" data-aos-delay="200" data-v-6b504637> IgniteAI is more than a product—it’s a revolution in how humans and AI work together. With AI Agents designed to empower, adapt, and simplify, the possibilities are endless. Be part of this movement, and let’s build the future together. </p><div class="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4" data-aos="fade-up" data-aos-delay="400" data-v-6b504637><a href="https://t.me/igniteai" class="cosmic-button cosmic-button-black" data-v-6b504637> Start Your Journey with IgniteAI </a><a href="#" class="cosmic-button cosmic-button-white" data-v-6b504637> Explore the technology behind IgniteAI </a></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FinalCallToAction.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FinalCallToAction = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6b504637"]]);
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20xml:space='preserve'%20enable-background='new%200%200%2024%2024'%3e%3cpath%20d='M14.095%2010.316%2022.286%201h-1.94L13.23%209.088%207.551%201H1l8.59%2012.231L1%2023h1.94l7.51-8.543L16.45%2023H23l-8.905-12.684zm-2.658%203.022-.872-1.218L3.64%202.432h2.98l5.59%207.821.869%201.219%207.265%2010.166h-2.982l-5.926-8.3z'%20fill='%23ffffff'%20class='fill-000000'%3e%3c/path%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2020%2018'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20stroke='%23ffffff'%20stroke-width='2'%20fill='none'%20fill-rule='evenodd'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='stroke-000000'%3e%3cpath%20d='m6.362%209.886%204.637%203.984%203.433%202.948a.718.718%200%200%200%201.174-.379l3.376-14.56a.718.718%200%200%200-.963-.83L1.455%207.558a.718.718%200%200%200%20.122%201.372l4.785.957ZM6.362%209.886l12.216-8.822'%3e%3c/path%3e%3cpath%20d='m10.392%2013.433-2.805%202.805a.718.718%200%200%201-1.225-.508V9.886'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-black text-white py-6" }, _attrs))} data-v-70b95aca><div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between" data-v-70b95aca><div class="flex justify-center md:justify-start mb-4 md:mb-0" data-v-70b95aca><img${ssrRenderAttr("src", _imports_0$4)} alt="Logo" class="w-16 h-16 md:w-24 md:h-24" data-v-70b95aca></div><div class="text-center text-lg font-bold mb-4 md:mb-0" data-v-70b95aca><p data-v-70b95aca>© ${ssrInterpolate(unref(currentYear))} IgniteAI. All rights reserved.</p></div><div class="flex justify-center md:justify-end space-x-4" data-v-70b95aca><a href="https://x.com/myigniteai?s=21" target="_blank" rel="noopener noreferrer" data-v-70b95aca><img${ssrRenderAttr("src", _imports_1)} alt="Twitter" class="w-6 h-6 md:w-8 md:h-8" data-v-70b95aca></a><a href="https://t.me/igniteai" target="_blank" rel="noopener noreferrer" data-v-70b95aca><img${ssrRenderAttr("src", _imports_2)} alt="Telegram" class="w-6 h-6 md:w-8 md:h-8" data-v-70b95aca></a></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-70b95aca"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(WhyIgniteAI, null, null, _parent));
      _push(ssrRenderComponent(MeetTheAIAgents, null, null, _parent));
      _push(ssrRenderComponent(TheProblemWeSolve, null, null, _parent));
      _push(ssrRenderComponent(MarketOpportunity, null, null, _parent));
      _push(ssrRenderComponent(Roadmap, null, null, _parent));
      _push(ssrRenderComponent(HowIgniteAIWorks, null, null, _parent));
      _push(ssrRenderComponent(FinalCallToAction, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CkLW4jGS.js.map
