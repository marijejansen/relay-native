<template>
<GridLayout class="container" rows="auto, *, auto">
    <GridLayout v-if="showTop" row="0" columns="*,*,*,*,*,*,*,*,*" class="times-top">


      <Label col="0" text="50Fr"></Label>          
      <Label col="1" text="100Fr"></Label>
      <Label col="2" text="200Fr"></Label>
      <Label col="3" text="50B"></Label>     
      <Label col="4" text="100B"></Label>
      <Label col="5" text="50F"></Label>
      <Label col="6" text="100F"></Label>
      <Label col="7" text="50Br"></Label>
      <Label col="8" text="100Br"></Label>
    </GridLayout>
      <ListView row="1" for="item in items()">
      <v-template>
        <TimesItem @toggleShow="onToggleShow" :item="item" :key="item.id"></TimesItem>
      </v-template>
    </ListView>
</GridLayout>

</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Times.ts";
</script>

<style lang="scss">
@import "./Times.scss";
</style>