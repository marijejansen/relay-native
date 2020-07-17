      
<template>
      <TextField @focus="onFocus" id="singleField" keyboardType="number" returnPress="setTime" tap="showKeyboard" class="edit-result" :text="time" @blur="onBlur" /> 
            <!-- <TextField keyboardType="number" class="edit-result" text="1" />  -->

</template>      


<script lang="ts">
//@ts-ignore
export { default } from "./SingleTime.ts";
</script>