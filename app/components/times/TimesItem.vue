<template>
  <GridLayout rows="*,*,*,*">
    <GridLayout v-if="!showDetails" row="0" class="details-label" columns="6*, 6*, 2*" >
      <Label col="0" :text="item.firstName + ' ' + item.lastName" @tap="toggleDetails"></Label>
      <Label col="1" :text="item.clubName" @tap="toggleDetails"></Label>
      <Label class="last" col="2" :text="item.birthYear" @tap="toggleDetails" :class="{ loaded: timesLoaded }"></Label>
    </GridLayout>

    <GridLayout v-if="showDetails" row="0" class="details-label" columns="4*, 5*, auto, auto">
      <Label col="0" :text="item.firstName + ' ' + item.lastName" @tap="toggleDetails"></Label>
      <Label col="1" :text="item.birthYear" @tap="toggleDetails"></Label>
      <Image col="2" v-if="!showEdit" class="edit-icon" @tap="toggleEdit()" src="~/assets/images/pen_yellow.png" stretch="fill" />
      <Image col="2" v-if="showEdit" class="edit-icon" @tap="onSave" src="~/assets/images/check.png" stretch="fill" />
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

    <EditTimes key="sc-edittimes" v-if="showEdit && this.isShortCourse" :courseTimes="times" :swimmerId="item.id" :isShortCourse="true" @saveTime="saveTime"></EditTimes>
    <EditTimes key="lc-edittimes" v-if="showEdit && !this.isShortCourse" :courseTimes="times" :swimmerId="item.id" :isShortCourse="false" @saveTime="saveTime"></EditTimes>

  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./TimesItem.ts";
</script>