<template>
  <GridLayout rows="auto, *" class="search-layout container">
    <GridLayout row="0" class="search-bar" orientation="horizontal" columns="3*,3*,1*">
      <TextField
        column="0"
        v-model="firstName"
        :hint="$t('search.firstname')"
        returnKeyType="next"
        @tap="onFirstTextfieldTap()"
      />
      <TextField
        column="1"
        v-model="lastName"
        :hint="$t('search.lastname')"
        @returnPress="search"
        returnKeyType="search"
        @loaded="textFieldLoaded"
      />
      <Image
        src="~/assets/images/lens.png"
        column="2"
        class="search-button"
        :class="{ 'active': searched }"
        @tap="search"
      />
    </GridLayout>
    <GridLayout row="1">
      <ScrollView orientation="vertical">
        <StackLayout>
          <WrapLayout :v-if="hasResults" >
            <GridLayout
              v-for="result in results()"
              v-bind:key="result.id"
              class="search-result"
              columns="3*, 3*, *"
              @tap="select(result.id)"
            >
              <Label col="0" class="first" :text="result.firstName + ' '+ result.lastName"></Label>
              <Label col="1" :text="result.clubName"></Label>
              <Label col="2" :text="result.birthYear"></Label>
            </GridLayout>
          </WrapLayout>
          <Selection height="50%" row="2" v-if="hasSelection()"></Selection>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Search.ts";
</script>

<style lang="scss">
@import "./Search.scss";
</style>