<template>
  <GridLayout rows="*,*,*,*">
    <GridLayout v-if="!showDetails" row="0" class="details-label" columns="4*, 5*, 2*" >
      <Label col="0" :text="item.firstName + ' ' + item.lastName" @tap="toggleDetails"></Label>
      <Label col="1" :text="item.clubName" @tap="toggleDetails"></Label>
      <Label col="2" :text="item.birthYear" @tap="toggleDetails"></Label>
    </GridLayout>

    <GridLayout v-if="showDetails" row="0" class="details-label" columns="4*, 5*, auto, auto">
      <Label col="0" :text="item.firstName + ' ' + item.lastName" @tap="toggleDetails"></Label>
      <Label col="1" :text="item.birthYear" @tap="toggleDetails"></Label>
      <Image col="2" v-if="!showEdit" class="edit-icon" @tap="toggleEdit()" src="~/assets/images/pen_yellow.png" stretch="fill" />
      <Image col="2" v-if="showEdit" class="edit-icon" @tap="onSave" src="~/assets/images/check_yellow.png" stretch="fill" />
    </GridLayout>

    <GridLayout
      row="1"
      v-if="showDetails && !showEdit"
      class="details"
      :columns="colsOrRowsForTimes()"
    >
      <Label
        v-for="(val, key, index) in times"
        v-bind:key="'det' + item.id + index"
        :col="getIndex(key)"
        :text="timeString(val)"
      ></Label>
    </GridLayout>

    <GridLayout
      row="1"
      v-if="showEdit"
      class="details edit"
      columns="*,*"
      :rows="colsOrRowsForTimes('rows')"
    >
      <Label
        class="edit-result"
        col="0"
        v-for="(val, key, index) in times"
        v-bind:key="'ed_n' + item.id + index"
        :row="getIndex(key)"
        :text="strokeNameLong(key)"
      ></Label>
      <SingleTime
        :id="'single_' + item.id + '' + index"
        class="edit-result"
        col="1"
        v-for="(val, key, index) in times"
        v-bind:key="'ed' + item.id + index"
        :row="getIndex(key)"
        :timeSeconds="val"
        :index="getIndex(key)"
        @saveTime="saveTime(index, $event)"
      ></SingleTime>
    </GridLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./TimesItem.ts";
</script>