      
<template>
  <GridLayout class="single-time">
    <Label v-show="!inputVisible" :text="time()" @tap="setInputVisible" />
    <TextField
      keyboardType="number"
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