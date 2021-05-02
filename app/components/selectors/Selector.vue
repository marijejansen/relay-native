<template>
    <GridLayout class="selector" row="0" columns="1*,8*,1*">
      <Image class="first" src="~/assets/images/arrow.png" text="<" @tap="previous()"></Image>
      <Label col="1" :text="itemName(number)"></Label>
      <Image col="2" src="~/assets/images/arrow.png" text=">" @tap="next()"></Image>
    </GridLayout>
</template>    

<script lang="ts">
//@ts-ignore
  export { default } from "./Selector.ts";
</script>