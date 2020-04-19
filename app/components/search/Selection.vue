<template>
<GridLayout rows="auto, *" class="search-layout">
    <Label row="0" text="Selection" class="label-top"></Label>

    <ListView row="1" for="result in selection()">
      <v-template>
        <SelectionItem :selection-item="result" :key="result.id"></SelectionItem>
      </v-template>     
    </ListView>
</GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from './Selection.ts';
</script>
