<template>
  <GridLayout @tap="select()" :class="clicked ? 'clicked' : ''">
    <Label col="0" class="first" :text="searchResult.firstName + ' '+ searchResult.lastName"></Label>
    <Label col="1" :text="searchResult.clubName"></Label>
    <Label col="2" :text="searchResult.birthYear"></Label>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./SearchItem.ts";
</script>