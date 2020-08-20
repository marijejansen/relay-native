<template>
  <GridLayout class="calculate container" columns="*" rows="auto, *, auto">
    
    <CalculateTop row="0"></CalculateTop>

    <ScrollView row="1">
      <GridLayout rows="*, *">

          <GridLayout row="0" columns="*, auto" v-if="selectionIsClosed" colums="auto" class="selection-closed" @tap="openSelection()">
            <Label col="0" :text="selectedText()"></Label>
            <Image col="1" class="edit-icon" src="~/assets/images/pen_yellow.png" stretch="fill" />
          </GridLayout>

          <WrapLayout row="0" v-if="!selectionIsClosed">         
            <CalculateSelectionItem
              v-for="(result, key, index) in selection()"
              :selection-item="result"
              :row="index"
              :key="result.id + '_' + index"
              @setActive="setActive(result.id, $event)"
            ></CalculateSelectionItem>
          </WrapLayout>


        <GridLayout row="1" rows="auto, auto, *">
          <Label v-show="showCalculateTop" row="0" :text="$t('calculate.resultText')" class="label-top"></Label>
          <Label class="no-results" v-show="showNoResults" row="1" :text="$t('calculate.noresults')"></Label>
          <WrapLayout row="2">
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
    <GridLayout row="2">
      <Button :text="$t('calculate.button')" @tap="calculate()" :class="!canCalculate ? 'disabled' : clicked ? 'active' : ''" />
    </GridLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Calculate.ts";
</script>