var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return "Hallo World!";
}
var mycomponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { mycomponent as default };
