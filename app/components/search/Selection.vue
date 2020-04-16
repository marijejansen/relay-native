<template>
<GridLayout rows="auto, *" class="search-layout">
    <Label row="0" text="Selection" class="selection"></Label>

    <ListView row="1" for="result in selection()">
      <v-template>
        <GridLayout columns="6*, 6*, 2*, *" class="search-result" :class="{ removed: false}">
          <Label col="0" class="first" :text="result.firstName + ' '+ result.lastName"></Label>
          <Label col="1" :text="result.clubName" ></Label>
          <Label col="2" :text="result.birthYear"></Label>
          <Label col="3" text="X" class="remove" @tap="remove(result.id)"></Label>
        </GridLayout>
      </v-template>     
    </ListView>
</GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from './Selection.ts';
</script>
