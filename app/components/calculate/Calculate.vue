<template>
  <GridLayout class="calculate container" columns="*" rows="auto, auto, *, *, auto">
    
    <!-- <GridLayout class="relay-selector" row="0" columns="1*,8*,1*">
      <Image class="first" src="~/assets/images/arrow.png" text="<" @tap="prevRelay()"></Image>
      <Label col="1" :text="relayLabel()"></Label>
      <Image col="2" src="~/assets/images/arrow.png" text=">" @tap="nextRelay()"></Image>
    </GridLayout>
    
    <GridLayout class="relay-selector" row="1" columns="1*,8*,1*">
      <Image class="first" src="~/assets/images/arrow.png" text="<" @tap="nextCourse()"></Image>
      <Label col="1" :text="courseLabel()"></Label>
      <Image col="2" src="~/assets/images/arrow.png" text=">" @tap="nextCourse()"></Image>
    </GridLayout> -->

    <RelaySelector row="0"></RelaySelector>
    <CourseSelector row="1"></CourseSelector>


    <GridLayout row="2" rows="auto, *">
      <ListView row="1" for="result in selection()">
        <v-template>
          <CalculateSelectionItem :selection-item="result" :key="result.id" />
        </v-template>
      </ListView>
    </GridLayout>

  <GridLayout row="4"><Button text="KLIK HIER" @tap="calculate()"/></GridLayout>

    <GridLayout row="3">
      <ListView for="team in relayTeams">
        <v-template>
          <CalculateRelayTeam :team="team"/>
        </v-template>
      </ListView>
    </GridLayout>

  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Calculate.ts";
</script>