<template>
    <GridLayout class="selector" row="0" columns="1*,8*,1*">
      <Image class="first" src="~/assets/images/arrow.png" text="<" @tap="nextCourse()"></Image>
      <Label col="1" :text="courseLabel()"></Label>
      <Image col="2" src="~/assets/images/arrow.png" text=">" @tap="nextCourse()"></Image>
    </GridLayout>
</template>    


<script lang="ts">
//@ts-ignore
  export { default } from "./CourseSelector.ts";
</script>