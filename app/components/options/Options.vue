<template class="options">

<GridLayout rows="auto, auto, auto, auto, auto">
    <Label row="0" text="OPTIONS"/>
    <Label row="1" text="Age groups:"/>
    <Selector row="2" :active-number="isMasters" :items="isMastersItems" @changeItem="setIsMasters"></Selector>
    <Label row="3" text="Calculate for year:"/>
    <Selector row="4" :active-number="yearIndex" :items="getForYearItems" @changeItem="setForYear"></Selector>

</GridLayout>

</template>    


<script lang="ts">
//@ts-ignore
  export { default } from "./Options.ts";
</script>