<template>
<GridLayout rows="auto, auto">  
    <Selector row="0" :active-number="relayNumber" :items="relays" @changeItem="setRelay"></Selector>
    <Selector row="1" :active-number="courseNumber" :items="courses" @changeItem="setCourse"></Selector>
</GridLayout> 
</template>


<script lang="ts">
//@ts-ignore
export { default } from "./CalculateTop.ts";
</script>