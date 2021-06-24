<template>
  <GridLayout class="manual-add">
    <GridLayout
      row="4"
      colSpan="2"
      class="add-swimmer"
      rows="auto, auto"
      columns="8*, 2*"
    >
      <GridLayout
        row="1"
        colSpan="2"
        class=""
        rows="auto, auto, auto, auto"
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
          :class="!validYear ? 'invalid' : ''"
          row="2"
          column="0"
          v-model="birthYear"
          keyboardType="number"
          :hint="$t('options.addSwimmer.birthYear')"
        />
        <WrapLayout row="2" column="1" class="add-gender">
          <Selector
            :active-number="genderIndex"
            :items="genders"
            @changeItem="setGender"
          ></Selector>
        </WrapLayout>
        <Button row="3" colSpan="2" :text="$t('options.addSwimmer.save')" @tap="addSwimmer()" :class="!canAddSwimmer ? 'disabled' : buttonIsClicked ? 'active' : ''" />
      </GridLayout>
    </GridLayout>
  </GridLayout>
</template>

<script lang="ts">
//@ts-ignore
export { default } from "./ManualAdd.ts";
</script>