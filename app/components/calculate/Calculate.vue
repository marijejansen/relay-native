<template>
  <GridLayout class="calculate container" columns="*" rows="auto, auto, *, auto">
    <RelaySelector row="0"></RelaySelector>
    <CourseSelector row="1"></CourseSelector>

    <ScrollView row="2">
      <GridLayout rows="*, *">

          <GridLayout row="0" v-if="selectionIsClosed" colums="auto" class="selection-closed" @tap="openSelection()">
            <Label col="0" :text="selectedText()"></Label>
            <!-- <Label col=1></Label> -->
          </GridLayout>

          <WrapLayout row="0" v-if="!selectionIsClosed">         
            <CalculateSelectionItem
              v-for="(result, key, index) in selection()"
              :selection-item="result"
              :selected="isSelected(result.id)"
              :row="index"
              :key="result.id + '_' + index"
              @setActive="setActive(result.id, $event)"
            ></CalculateSelectionItem>
          </WrapLayout>


        <GridLayout row="1" rows="auto, *">
          <Label v-show="showCalculateTop" row="0" :text="$t('calculate.resultText')" class="label-top"></Label>
          <WrapLayout row="1">
            <CalculateRelayTeam
              v-for="(team, index) in relayTeams"
              v-bind:key="index +'_' + team.time"
              :team="team"
              :class="index === 0 ? 'team-first' : ''"
            />
          </WrapLayout>
        </GridLayout>

      </GridLayout>
    </ScrollView>
    <GridLayout row="3">
      <Button :text="$t('calculate.button')" @tap="calculate()" />
    </GridLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Calculate.ts";
</script>