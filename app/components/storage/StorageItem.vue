
<template>
<GridLayout class="load-data" rows="auto, auto" columns="*,*">
    <GridLayout row="0" colSpan="2" class="storage-item" @tap="loadTapped" columns="3*, 2*, 6*">
        <Label col="0" :text="getDateString(item.date)"></Label>
        <Label col="1" :text="item.numberOfSwimmers"></Label>
        <Label col="2" :text="item.description"></Label>
    </GridLayout>
    <Button :class="getTapped ? 'clicked' : ''" v-if="selected" row="1" col="0" :text="buttonText" @tap="getData"></Button>
    <Button :class="deleteTapped ? 'delete clicked' : 'delete'" v-if="selected" row="1" col="1" :text="buttonTextDelete" @tap="deleteData"></Button>

</GridLayout>

</template>

<script lang="ts">
//@ts-ignore
export { default } from "./StorageItem.ts";
</script>
