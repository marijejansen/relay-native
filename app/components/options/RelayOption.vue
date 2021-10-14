<template>
  <Label
    :class="'relay' + (!relayIsActive ? ' disabled' : '')"
    :text="relayString"
    @tap="toggle"
  >
  </Label>
</template>    

<script lang="ts">
//@ts-ignore
export { default } from "./RelayOption.ts";
</script>