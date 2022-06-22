<template>
  <tr>
    <td
      v-for="field in Object.keys(fields)"
      class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
    >
      <div
        class="text-left"
        :class="{
          'font-medium': fields[field].bold,
          'text-center': fields[field].centered,
        }"
      >
        {{ row[field] }}
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: { row: Object, fields: Object, format: Object },
};
</script>
