<template>
  <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
    <div class="overflow-x-auto">
      <header
        class="flex items-center justify-between px-5 py-4 cursor-pointer"
        @click="expanded = !expanded"
      >
        <!-- Left Header -->
        <div class="flex items-center">
          <div class="flex shrink-0 mr-2">
            <svg
              class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
              :class="expanded && 'transform rotate-180'"
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
          <h2 class="font-semibold text-slate-800">
            All Rows
            <span class="text-slate-400 font-medium">{{ rows.length }}</span>
          </h2>
        </div>
        <!-- Rigth Header -->
        <div>
          <div
            v-if="rows.length > 0"
            class="text-sm text-slate-300 hover:underline hover:text-slate-500"
            @click.stop="exportData"
          >
            xls
          </div>
        </div>
      </header>
      <div>
        <table v-if="expanded" class="table-auto w-full">
          <thead
            class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200"
          >
            <tr>
              <th
                v-for="field in Object.keys(fields)"
                class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
              >
                <div
                  class="font-semibold text-left"
                  :class="{ 'text-center': fields[field].centered }"
                >
                  {{ field }}
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-slate-200">
            <TableItem
              v-for="row in rows"
              :row="row"
              :fields="fields"
              :format="format"
            ></TableItem>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as XLSX from "xlsx";

import TableItem from "./TableItem.vue";
export default {
  props: {
    format: { type: Object, default: {} },
    rows: { type: Array, default: [] },
    hidecolumns: Array,
  },
  components: { TableItem },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    fields() {
      if (this.rows.length == 0) return [];
      const firstRow = this.rows[0];
      const keys = Object.keys(firstRow).filter((d) => {
        return !(this.hidecolumns || []).includes(d);
      });
      const fields = keys.reduce((a, d) => {
        a[d] = { ...this.format[d] };
        return a;
      }, {});
      return fields;
    },
  },
  methods: {
    exportData() {
      const worksheet = XLSX.utils.json_to_sheet(this.rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Export");
      XLSX.writeFile(workbook, "Export.xlsx");
    },
  },
};
</script>
