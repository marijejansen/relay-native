<template>
<GridLayout class="container options" rows="auto, auto, auto, auto, auto" columns="*, *">
    <Label class="label-top" row="0" colSpan="2" :text="$t('options.title')"/>
    <Label class="option-label" row="1" column="0" :text="$t('options.labels.ageGroup')"/>
    <Selector row="1" column="1" :active-number="isMasters" :items="isMastersItems" @changeItem="setIsMasters"></Selector>
    <Label row="2" class="option-label" column="0" :text="$t('options.labels.calculateFor')"/>
    <Selector row="2" column="1" :active-number="yearIndex" :items="getForYearItems" @changeItem="setForYear"></Selector>
    <Label row="3" class="option-label" column="0" :text="$t('options.labels.calculateFrom')"/>
    <Selector row="3" column="1" :active-number="fromYearIndex" :items="getFromYearItems" @changeItem="setForYear"></Selector>

    <OptionsAdd row="4" colSpan="2"></OptionsAdd>
</GridLayout>

</template>    


<script lang="ts">
//@ts-ignore
  export { default } from "./Options.ts";
</script>