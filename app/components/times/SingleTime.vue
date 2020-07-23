      
<template>
  <GridLayout class="single-time" @tap="focusEdit($event)">
    <Label v-show="!inputVisible" :text="time()" @tap="setInputVisible" />
    <TextField
      :id="'edit-time_' + index"
      @returnPress="setTime"
      returnKeyType="done"
      v-show="inputVisible"
      v-model="editTime"
      @blur="setTime"
    />
  </GridLayout>
</template>      


<script lang="ts">
//@ts-ignore
export { default } from "./SingleTime.ts";
</script>