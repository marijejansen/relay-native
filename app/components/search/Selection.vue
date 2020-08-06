<template>
  <WrapLayout :v-if="hasSelection">
    <Label :text="$t('search.selection')" class="label-top"></Label>
    <SelectionItem v-for="result in selection()" :selection-item="result" :key="result.id"></SelectionItem>
  </WrapLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Selection.ts";
</script>
