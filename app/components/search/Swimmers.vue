<template>
  <GridLayout class="container swimmers-layout" rows="auto, auto, auto">
    <Selector row="0" :active-number="selectedPage" :items="pageSelectionItems" @changeItem="setPage" ></Selector>
    <Search  v-if="showSearch" row="1"></Search>
    <ManualAdd v-if="showManual" row="1"></ManualAdd>
    <Selection row="2" v-if="hasSelection()"></Selection>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Swimmers.ts";
</script>