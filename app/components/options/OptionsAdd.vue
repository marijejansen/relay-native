<template>
  <GridLayout class="options-add">
    <GridLayout
      row="4"
      colSpan="2"
      class="add-swimmer"
      rows="auto, auto"
      columns="8*, 2*"
    >
      <Label row="0" col="0" text="Add Swimmer" @tap="toggleAddDetails"></Label>
      <Label row="0" col="1" text="+" @tap="toggleAddDetails"></Label>
      <GridLayout
        row="1"
        v-if="showAddDetails"
        colSpan="2"
        class=""
        rows="auto, auto, auto"
        columns="*, *"
      >
        <TextField
          column="0"
          v-model="firstName"
          :hint="$t('options.addSwimmer.firstName')"
          returnKeyType="next"
        />
        <TextField
          column="1"
          v-model="lastName"
          :hint="$t('options.addSwimmer.lastName')"
        />
        <TextField
          :hint="$t('options.addSwimmer.clubName')"
          row="1"
          column="0"
          colSpan="2"
          v-model="clubName"
        />
        <TextField
          row="2"
          column="0"
          v-model="birthYear"
          :hint="$t('options.addSwimmer.birthYear')"
        />
        <WrapLayout row="2" column="1" class="add-gender">
          <Selector
            :active-number="addSwimmerGender"
            :items="genders"
          ></Selector>
        </WrapLayout>
      </GridLayout>
    </GridLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./OptionsAdd.ts";
</script>