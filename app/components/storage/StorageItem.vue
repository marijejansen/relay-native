
<template>
<GridLayout rows="auto, auto">
    <GridLayout row="0" class="storage-item" columns="3*, 2*, 5*, *">
        <Label col="0" :text="getDateString(item.date)"></Label>
        <Label col="1" :text="item.numberOfSwimmers"></Label>
        <Label col="2" :text="item.description"></Label>
        <Image
          class="load-icon"
          src="~/assets/images/load_dark.png"
          stretch="fill"
          col="3"
          @tap="loadTapped(item.id)"
        />
    </GridLayout>
    <Button v-if="selected" row="1" :text="buttonText" @tap="getData"></Button>
</GridLayout>

</template>

<script lang="ts">
//@ts-ignore
export { default } from "./StorageItem.ts";
</script>
