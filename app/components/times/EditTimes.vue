<template>
    <GridLayout
      row="1"
      class="details edit"
      columns="*,*"
      :rows="colsOrRowsForTimes('rows')"
    >
      <Label
        class="edit-result"
        col="0"
        v-for="(val, key, index) in courseTimes"
        v-bind:key="'ed_n' + swimmerId + index"
        :row="getIndex(key)"
        :text="strokeNameLong(key)"
      ></Label>
      <SingleTime
        :id="singleTimeId(index)"
        class="edit-result"
        col="1"
        v-for="(val, key, index) in courseTimes"
        v-bind:key="'ed' + swimmerId + index"
        :row="getIndex(key)"
        :timeSeconds="val"
        :index="getIndex(key)"
        @saveTime="saveTime(index, $event)"
      ></SingleTime>
    </GridLayout>
</template>      


<script lang="ts">
//@ts-ignore
export { default } from "./EditTimes.ts";
</script>