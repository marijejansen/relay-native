<template>
        <GridLayout columns="6*, 3*" class="selection-item" 
        :class="{ disabled: !isActive }"
        @tap="toggleActive">
          <Label col="0" class="first" :text="selectionItem.firstName + ' '+ selectionItem.lastName"></Label>
          <Label col="2" :text="getAge()"></Label>
        </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./CalculateSelectionItem.ts";
</script>