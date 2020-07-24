<template>
  <GridLayout class="calculate" columns="*" rows="auto, *">
    <GridLayout class="relay-selector" row="0" columns="1*,8*,1*">
      <Label col="0" text="<" @tap="prevRelay()"></Label>
      <Label column="1" :text="relayLabel()"></Label>
      <Label column="2" text=">" @tap="nextRelay()"></Label>
    </GridLayout>
    
    <GridLayout row="1" class="container" rows="auto, *">
      <ListView row="1" for="result in selection()">
        <v-template>
          <CalculateSelectionItem :selection-item="result" :key="result.id" />
        </v-template>
      </ListView>
    </GridLayout>
  </GridLayout>


</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Calculate.ts";
</script>