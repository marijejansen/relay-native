<template>
<GridLayout class="container storage" rows="auto, *" columns="*">
    
    
    <!-- <Label class="label-top" row="0" colSpan="2" :text="$t('storage.load')"/> -->

    <GridLayout row="0" class="load-top" columns="3*, 2*, 6*">
        <Label col="0" :text="$t('storage.date')"></Label>
        <Label col="1" :text="$t('storage.number')"></Label>
        <Label col="2" :text="$t('storage.description')"></Label>
    </GridLayout>


    <ListView row="1" for="item in selection()">
              <v-template>

    <GridLayout class="storage-item" columns="3*, 2*, 5*, *">
        <Label col="0" :text="getDateString(item.date)"></Label>
        <Label col="1" :text="item.numberOfSwimmers"></Label>
        <Label col="2" :text="item.description"></Label>
        <Image
          class="load-icon"
          src="~/assets/images/load_dark.png"
          stretch="fill"
          col="3"
        />
    </GridLayout>
          </v-template>

    </ListView>
</GridLayout>

</template>    

<script lang="ts">
//@ts-ignore
export { default } from "./Storage.ts";
</script>