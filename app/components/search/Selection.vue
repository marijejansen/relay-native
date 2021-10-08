<template>
  <GridLayout>
    <WrapLayout :v-if="hasSelection">
      <Label :text="$t('search.selection')" class="label-top"></Label>
      <ScrollView orientation="vertical" class="selection-layout">
        <StackLayout>
          <SelectionItem
            v-for="result in selection()"
            :selection-item="result"
            class="search-result"
            :key="result.id"
          ></SelectionItem>
        </StackLayout>
      </ScrollView>
    </WrapLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./Selection.ts";
</script>
