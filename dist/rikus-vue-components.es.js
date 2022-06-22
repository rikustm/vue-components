import * as XLSX from "xlsx";
import { openBlock, createElementBlock, Fragment, renderList, createElementVNode, normalizeClass, toDisplayString, resolveComponent, withModifiers, createCommentVNode, createBlock, createTextVNode } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  props: { row: Object, fields: Object, format: Object }
};
const _hoisted_1$1 = { class: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tr", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys($props.fields), (field) => {
      return openBlock(), createElementBlock("td", _hoisted_1$1, [
        createElementVNode("div", {
          class: normalizeClass(["text-left", {
            "font-medium": $props.fields[field].bold,
            "text-center": $props.fields[field].centered
          }])
        }, toDisplayString($props.row[field]), 3)
      ]);
    }), 256))
  ]);
}
var TableItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  props: {
    format: { type: Object, default: {} },
    rows: { type: Array, default: [] },
    hidecolumns: Array
  },
  components: { TableItem },
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    fields() {
      if (this.rows.length == 0)
        return [];
      const firstRow = this.rows[0];
      const keys = Object.keys(firstRow).filter((d) => {
        return !(this.hidecolumns || []).includes(d);
      });
      const fields = keys.reduce((a, d) => {
        a[d] = { ...this.format[d] };
        return a;
      }, {});
      return fields;
    }
  },
  methods: {
    exportData() {
      const worksheet = XLSX.utils.json_to_sheet(this.rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Export");
      XLSX.writeFile(workbook, "Export.xlsx");
    }
  }
};
const _hoisted_1 = { class: "bg-white shadow-lg rounded-sm border border-slate-200 relative" };
const _hoisted_2 = { class: "overflow-x-auto" };
const _hoisted_3 = { class: "flex items-center" };
const _hoisted_4 = { class: "flex shrink-0 mr-2" };
const _hoisted_5 = /* @__PURE__ */ createElementVNode("path", { d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = { class: "font-semibold text-slate-800" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" All Rows ");
const _hoisted_9 = { class: "text-slate-400 font-medium" };
const _hoisted_10 = {
  key: 0,
  class: "table-auto w-full"
};
const _hoisted_11 = { class: "text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200" };
const _hoisted_12 = { class: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px" };
const _hoisted_13 = { class: "text-sm divide-y divide-slate-200" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TableItem = resolveComponent("TableItem");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("header", {
        class: "flex items-center justify-between px-5 py-4 cursor-pointer",
        onClick: _cache[1] || (_cache[1] = ($event) => $data.expanded = !$data.expanded)
      }, [
        createElementVNode("div", _hoisted_3, [
          createElementVNode("div", _hoisted_4, [
            (openBlock(), createElementBlock("svg", {
              class: normalizeClass(["w-3 h-3 shrink-0 ml-1 fill-current text-slate-400", $data.expanded && "transform rotate-180"]),
              viewBox: "0 0 12 12"
            }, _hoisted_6, 2))
          ]),
          createElementVNode("h2", _hoisted_7, [
            _hoisted_8,
            createElementVNode("span", _hoisted_9, toDisplayString($props.rows.length), 1)
          ])
        ]),
        createElementVNode("div", null, [
          $props.rows.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "text-sm text-slate-300 hover:underline hover:text-slate-500",
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.exportData && $options.exportData(...args), ["stop"]))
          }, " xls ")) : createCommentVNode("", true)
        ])
      ]),
      createElementVNode("div", null, [
        $data.expanded ? (openBlock(), createElementBlock("table", _hoisted_10, [
          createElementVNode("thead", _hoisted_11, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys($options.fields), (field) => {
                return openBlock(), createElementBlock("th", _hoisted_12, [
                  createElementVNode("div", {
                    class: normalizeClass(["font-semibold text-left", { "text-center": $options.fields[field].centered }])
                  }, toDisplayString(field), 3)
                ]);
              }), 256))
            ])
          ]),
          createElementVNode("tbody", _hoisted_13, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.rows, (row) => {
              return openBlock(), createBlock(_component_TableItem, {
                row,
                fields: $options.fields,
                format: $props.format
              }, null, 8, ["row", "fields", "format"]);
            }), 256))
          ])
        ])) : createCommentVNode("", true)
      ])
    ])
  ]);
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Table as default };
