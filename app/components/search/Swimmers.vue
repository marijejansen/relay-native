<template>
  <GridLayout class="container swimmers-layout" rows="auto, auto, auto">
    <Selector row="0" :active-number="selectedPage" :items="pageSelectionItems" @changeItem="setPage" ></Selector>
    <Search height="30%" v-if="showSearch" row="1"></Search>
    <ManualAdd height="30%" v-if="showManual" row="1"></ManualAdd>
    <Selection height="70%" row="2" v-if="hasSelection()"></Selection>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Swimmers.ts";
</script>