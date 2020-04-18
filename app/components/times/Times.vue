<template>
<GridLayout rows="auto, *, auto">

    <GridLayout row="0" columns="*,*,*,*,*,*,*,*,*" class="times-top">
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
  
      <ListView row="1" for="test in test()">
      <v-template>
        <GridLayout  columns="3*, 3*, *">
          <Label col="0" :text="test.firstName + ' ' + test.lastName"></Label>
          <Label col="1" :text="test.clubName"></Label>
          <Label col="2" :text="test.birtYear"></Label>
          <!-- <Label col="0" class="first" :text="result.firstName + ' '+ result.lastName"></Label>
          <Label col="1" :text="result.clubName"></Label>
          <Label col="2" :text="result.birthYear"></Label> -->
        </GridLayout>
      </v-template>
    </ListView>
    <Button row="2" text="Search" @tap="test"></Button>
</GridLayout>

</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Times.ts";
</script>

<style lang="scss" scoped>
@import "./Times.scss";
</style>