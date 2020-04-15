<template>
  <GridLayout columns="*, *" rows="*, *">
    <TextField row="0" col="0" v-model="firstName" hint="First name" />
    <TextField row="0" col="1" v-model="lastName" hint="Last name" />
    <Button text="Search" row="1" @tap="search"></Button>
    <StackLayout class="search-results" row="2">
      <StackLayout orientation="horizontal" v-for="test in results()" v-bind:key="test.id">
        <Label :text="test.firstName"></Label>
        <Label :text="test.lastName"></Label>
      </StackLayout>
    </StackLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from './Search.ts';
</script>

<!--<style type="text/css" src="Search.scss">