<template>
  <GridLayout class="container storage" rows="auto, auto, 2*, auto">
    <Label
      class="storage-title"
      row="0"
      :text="$t('storage.loadtitle')"
    ></Label>

    <GridLayout row="1" class="load-top" columns="3*, 2*, 6*">
      <Label col="0" :text="$t('storage.date')"></Label>
      <Label col="1" :text="$t('storage.number')"></Label>
      <Label col="2" :text="$t('storage.description')"></Label>
    </GridLayout>
    <ListView row="2" for="item in selection()">
      <v-template>
        <StorageItem :item="item" :key="item.id"></StorageItem>
      </v-template>
    </ListView>

    <GridLayout row="3" rows="auto, auto, auto, auto">
      <Label
        class="storage-title"
        row="0"
        :text="$t('storage.savetitle')"
      ></Label>
      <GridLayout row="1" columns="*, 4*" class="save-top">
        <Label col="0" :text="$t('storage.number')"></Label>
        <Label col="1" :text="$t('storage.description')"></Label>
      </GridLayout>
      <GridLayout class="add-save" row="2" columns="*, 4*" rows="*, auto">
        <Label :text="numberSelected" col="0" row="0"></Label>
        <TextField
          col="1"
          row="0"
          v-model="description"
          :hint="$t('storage.description')"
          returnKeyType="next"
        />
      </GridLayout>
      <Button :class="tapped ? 'clicked' : ''" row="3" :text="$t('storage.save')" colSpan="2" @tap="saveToStorage"></Button>
    </GridLayout>
  </GridLayout>
</template>    

<script lang="ts">
//@ts-ignore
export { default } from "./Storage.ts";
</script>