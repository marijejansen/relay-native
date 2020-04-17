<template>
        <GridLayout columns="6*, 6*, 2*, *" class="search-result" :class="{ removed: isRemoved }">
          <Label col="0" class="first" :text="item.firstName + ' '+ item.lastName"></Label>
          <Label col="1" :text="item.clubName" ></Label>
          <Label col="2" :text="item.birthYear"></Label>
          <Label col="3" text="X" class="remove" @tap="remove(item.id)"></Label>
        </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from './SelectionItem.ts';
</script>