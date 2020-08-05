<template>
  <GridLayout columns="*, *, *, *" class="team">
    <Label class="first" 
        v-for="(val, index) in teamSwimmers" 
        v-bind:key="'sw_' + val.id"
        :col="index"
        :text="val.firstName"></Label>

        <!-- v-for="(val, key, index) in times"
        v-bind:key="'det' + item.id + index"
        :col="getIndex(key)"
        :text="timeString(val)" -->

    <!-- <Label col="2" :text="getAge()"></Label> -->
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./CalculateRelayTeam.ts";
</script>