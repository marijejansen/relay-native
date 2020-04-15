<template>
  <GridLayout rows="auto, *, auto" class="search-layout">

  <GridLayout row="0" orientation="horizontal" columns="*,*">
    <TextField column="0" v-model="firstName" hint="First name" />
    <TextField column="1" v-model="lastName" hint="Last name" />
  </GridLayout>

    <ListView row="1" for="result in results()">
      <v-template>
        <GridLayout columns="3*, 3*, 6*, 2*" class="search-result">
          <Label col="0" class="first" :text="result.firstName"></Label>
          <Label col="1" :text="result.lastName"></Label>
          <Label col="2" :text="result.clubName"></Label>
          <Label col="3" :text="result.birthYear"></Label>
        </GridLayout>
      </v-template>
      
    </ListView>

  <Button row="2" text="Search" @tap="search"></Button>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from './Search.ts';
</script>

<!--<style type="text/css" src="Search.scss">