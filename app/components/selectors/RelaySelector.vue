<template>
    <GridLayout class="selector" row="0" columns="1*,8*,1*">
      <Image class="first" src="~/assets/images/arrow.png" text="<" @tap="prevRelay()"></Image>
      <Label col="1" :text="relayLabel()"></Label>
      <Image col="2" src="~/assets/images/arrow.png" text=">" @tap="nextRelay()"></Image>
    </GridLayout>
</template>    

<script lang="ts">
//@ts-ignore
  export { default } from "./RelaySelector.ts";
</script>