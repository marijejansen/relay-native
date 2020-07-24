<template>
  <GridLayout rows="auto, *,  *" class="search-layout container">

  <GridLayout row="0" class="search-bar" orientation="horizontal" columns="3*,3*,1*">
    <TextField column="0" v-model="firstName" hint="First name" returnKeyType="next" @tap="onFirstTextfieldTap()"/>
    <TextField column="1" v-model="lastName" hint="Last name" @returnPress="search" returnKeyType="done"/>
    <Image src="~/assets/images/lens.png"  column="2" class="search-button" :class="{ 'active': searched }" @tap="search"/>
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


  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from './Search.ts';
</script>

<style lang="scss">
@import "./Search.scss";
</style>