<template>
<GridLayout rows="*,*,*,*">
    <GridLayout v-if="!showDetails" row="0" class="details-label" columns="4*, 4*, 2*, auto">
          <Label col="0" :text="item.firstName + ' ' + item.lastName"></Label>
          <Label col="1" :text="item.clubName"></Label>
          <Label col="2" :text="item.birthYear"></Label>
          <Label col="3" class="edit-icon" text="A" @tap="toggleDetails"></Label>
    </GridLayout>

    <GridLayout v-if="showDetails" row="0" class="details-label" columns="4*, 5*, auto, auto">
          <Label col="0" :text="item.firstName + ' ' + item.lastName"></Label>
          <Label col="1" :text="item.birthYear"></Label>
          <Label col="2" class="edit-icon" text="B" @tap="showEdit = !showEdit"></Label>
          <Label col="3" class="edit-icon" text="A" @tap="toggleDetails"></Label>
    </GridLayout>

    <GridLayout row="1" v-if="showDetails && !showEdit" class="details" :columns="colsOrRowsForTimes()">
      <Label  v-for="(val, key, index) in times" v-bind:key="'det' + item.id + index" :col="index" :text="val"></Label>
    </GridLayout>

    <GridLayout row="1" v-if="showEdit" class="details edit" columns="*,*" :rows="colsOrRowsForTimes('rows')" @tap="clearTextfieldFocus" >
      <Label class="edit-result" col="0" v-for="(val, key, index) in times" v-bind:key="'ed_n' + item.id + index" :row="index" :text="strokeNameLong(key)"></Label>
      <!-- <Label class="edit-result" col="1" v-for="(val, key, index) in times" v-bind:key="'ed' + item.id + index" :row="index" :text="timeString(val)"></Label> -->
      <SingleTime class="edit-result" col="1" v-for="(val, key, index) in times" v-bind:key="'ed' + item.id + index" :row="index" :_time="val"></SingleTime>
    </GridLayout>

</GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./TimesItem.ts";
</script>