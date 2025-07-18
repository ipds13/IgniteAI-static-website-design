import { ref, watchEffect, watch, getCurrentInstance } from 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/vue/index.mjs';
import { i as injectHead, d as resolveUnrefHeadInput } from './server.mjs';
import { composableNames } from 'file:///Users/iputudickysundara/project/crypto/IgniteAI-static-website-design/node_modules/@unhead/shared/dist/index.mjs';

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

export { useHead as u };
//# sourceMappingURL=index-C2merokO.mjs.map
