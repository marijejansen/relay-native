<template>
<GridLayout class="container" rows="auto, *, auto">
    <GridLayout v-if="showTop" row="0" columns="*,*,*,*,*,*,*,*,*" class="times-top">
      <Label
        v-for="(stroke, index) in getStrokesSuperShort()"
        v-bind:key="'tn_' + stroke"
        :text="stroke"
        :col="index"
      ></Label>
    </GridLayout>
      <ListView row="1" for="item in selection()">
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