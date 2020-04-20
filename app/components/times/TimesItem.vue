<template>
<GridLayout rows="*,*,*,*">
    <GridLayout v-if="!showDetails" row="0" class="details-label" columns="4*, 4*, 2*, auto">
          <Label col="0" :text="item.firstName + ' ' + item.lastName"></Label>
          <Label col="1" :text="item.clubName"></Label>
          <Label col="2" :text="item.birthYear"></Label>
          <Label col="3" class="edit-icon" text="A" @tap="toggleDetails()"></Label>
    </GridLayout>

    <GridLayout v-if="showDetails" row="0" class="details-label" columns="4*, 5*, auto, auto">
          <Label col="0" :text="item.firstName + ' ' + item.lastName"></Label>
          <Label col="1" :text="item.birthYear"></Label>
          <Label col="2" class="edit-icon" text="B" @tap="showEdit = !showEdit"></Label>
          <Label col="3" class="edit-icon" text="A" @tap="toggleDetails()"></Label>
    </GridLayout>

    <GridLayout row="1" v-if="showDetails && !showEdit" class="details" columns="*,*,*,*,*,*,*,*,*">
      <Label col="0" :text="timeString(item.shortCourseTimes.freestyle50M)"></Label>
      <Label col="1" :text="timeString(item.shortCourseTimes.freestyle100M)"></Label>
      <Label col="2" :text="timeString(item.shortCourseTimes.freestyle200M)"></Label>
      <Label col="3" :text="timeString(item.shortCourseTimes.backstroke50M)"></Label>
      <Label col="4" :text="timeString(item.shortCourseTimes.backstroke100M)"></Label>
      <Label col="5" :text="timeString(item.shortCourseTimes.butterfly50M)"></Label>
      <Label col="6" :text="timeString(item.shortCourseTimes.butterfly100M)"></Label>
      <Label col="7" :text="timeString(item.shortCourseTimes.breaststroke50M)"></Label>
      <Label col="8" :text="timeString(item.shortCourseTimes.breaststroke100M)"></Label>
    </GridLayout>

    <GridLayout row="1" v-if="showEdit" class="details" rows="*,*,*,*,*,*,*,*,*">
      <Label row="0" :text="timeString(item.shortCourseTimes.freestyle50M)"></Label>
      <Label row="1" :text="timeString(item.shortCourseTimes.freestyle100M)"></Label>
      <Label row="2" :text="timeString(item.shortCourseTimes.freestyle200M)"></Label>
      <Label row="3" :text="timeString(item.shortCourseTimes.backstroke50M)"></Label>
      <Label row="4" :text="timeString(item.shortCourseTimes.backstroke100M)"></Label>
      <Label row="5" :text="timeString(item.shortCourseTimes.butterfly50M)"></Label>
      <Label row="6" :text="timeString(item.shortCourseTimes.butterfly100M)"></Label>
      <Label row="7" :text="timeString(item.shortCourseTimes.breaststroke50M)"></Label>
      <Label row="8" :text="timeString(item.shortCourseTimes.breaststroke100M)"></Label>
    </GridLayout>

</GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./TimesItem.ts";
</script>