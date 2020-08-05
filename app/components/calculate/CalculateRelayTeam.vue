<template>
  <GridLayout rows="auto, auto">

    <GridLayout row="0" columns="3*, 3*, auto, 3*, auto, 3*, auto, 3*" class="team-results" @tap="toggleDetails()">
      <Label col="0" :text="team.ageGroup + genderShort()" />
      <Label
        v-for="(val, index) in teamSwimmers"
        v-bind:key="'sw_' + val.id"
        :col="index * 2 + 1"
        :text="val.firstName"
      >
        <Label>-</Label>
      </Label>
      <Label col="2" text="" />
      <Label col="4" text="" />
      <Label col="6" text="" />
    </GridLayout>

    <GridLayout v-if="showDetails" row="1" columns="3*, 3*, auto, 3*, auto, 3*, auto, 3*" class="team-results">
      <Label col="0" :text="stringTime(team.time)" />
      <Label
        v-for="(val, index) in teamSwimmers"
        v-bind:key="'sw_' + val.id"
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