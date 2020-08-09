<template>
  <GridLayout class="calculate container" columns="*" rows="auto, auto, *, *, auto">
    
    <RelaySelector row="0"></RelaySelector>
    <CourseSelector row="1"></CourseSelector>

    <ScrollView row="2">
      <WrapLayout>
        <CalculateSelectionItem
          v-for="(result, key, index) in selection()"
          :selection-item="result"
          :row="index"
          :key="result.id + '_' + index"
          @setActive="setActive(result.id, $event)"
        ></CalculateSelectionItem>
      </WrapLayout>
    </ScrollView>

    <GridLayout row="4">
      <Button text="KLIK HIER" @tap="calculate()" />
    </GridLayout>

    <GridLayout row="3">
      <ListView for="team in relayTeams">
        <v-template>
          <CalculateRelayTeam :team="team" />
        </v-template>
      </ListView>
    </GridLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Calculate.ts";
</script>