<template>
  <GridLayout rows="auto, auto">

    <GridLayout row="0" columns="3*, 3*, auto, 3*, auto, 3*, auto, 3*" class="team-results top" @tap="toggleDetails()">
      <!-- <Label col="0" :text="team.ageGroup + genderShort()" /> -->
      <Label col="0" :text="getAgeText()" />
      <Label
        v-for="(val, index) in teamSwimmers"
        v-bind:key="'sw_' + val.id + '_' + index"
        :col="index * 2 + 1"
        :text="val.firstName"
      >
        <Label>-</Label>
      </Label>
      <Label col="2" text="" />
      <Label col="4" text="" />
      <Label col="6" text="" />
    </GridLayout>

    <GridLayout v-if="showDetails" row="1" columns="3*, 3*, auto, 3*, auto, 3*, auto, 3*" class="team-results bottom">
      <Label col="0" :text="stringTime(team.time)" />
      <Label
        v-for="(val, index) in teamSwimmers"
        v-bind:key="'sw_' + val.id + '_' + index"
        :col="index * 2 + 1"
        :text="stringTime(val.time)"
        class="ind-time">
        <Label>-</Label>
      </Label>
      <Label col="2" text="" />
      <Label col="4" text="" />
      <Label col="6" text="" />
    </GridLayout>

  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./CalculateRelayTeam.ts";
</script>

