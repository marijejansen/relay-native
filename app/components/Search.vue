<template>
  <GridLayout rows="auto, *, auto">

  <GridLayout row="0" orientation="horizontal" columns="*,*">
    <TextField column="0" v-model="firstName" hint="First name" />
    <TextField column="1" v-model="lastName" hint="Last name" />
  </GridLayout>

    <ListView row="1" for="result in results()">
      <v-template>
        <FlexboxLayout flexDirection="row" style="background-color: greenyellow">
          <Label :text="result.firstName"></Label>
          <Label :text="result.lastName"></Label>
          <Label :text="result.clubName"></Label>
          <Label :text="result.birthYear"></Label>
        </FlexboxLayout>
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