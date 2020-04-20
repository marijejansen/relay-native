<template>
  <GridLayout rows="auto, *,  *, auto" class="search-layout container">

  <GridLayout row="0" orientation="horizontal" columns="*,*">
    <TextField column="0" v-model="firstName" hint="First name" />
    <TextField column="1" v-model="lastName" hint="Last name" />
  </GridLayout>

    <ListView class="result-list" row="1" for="result in results()">
      <v-template>
        <GridLayout class="search-result" columns="3*, 3*, *" @tap="select(result.id)">
          <Label col="0" class="first" :text="result.firstName + ' '+ result.lastName"></Label>
          <Label col="1" :text="result.clubName"></Label>
          <Label col="2" :text="result.birthYear"></Label>
        </GridLayout>
      </v-template>     
    </ListView>
    <Selection row="2" v-if="hasSelection()"></Selection>

  <Button class="btn" id="btn" row="3" text="Search" @tap="search"></Button>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from './Search.ts';
</script>

<style lang="scss">
@import "./Search.scss";
</style>