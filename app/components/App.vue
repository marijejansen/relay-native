<template>
  <Page class="page">
    <ActionBar :title="$t('actionbar.message')" android:flat="true">
      <GridLayout columns="5*, *, *">
        <Label class="title" :text="$t('actionbar.message')" col="0" />
        <Image
          class="load-icon"
          src="~/assets/images/load.png"
          stretch="fill"
          @tap="toggleStorage"
          col="1"
        />
        <Image
          class="options-icon"
          src="~/assets/images/options.png"
          stretch="fill"
          @tap="toggleOptions"
          col="2"
        />
      </GridLayout> </ActionBar
    >/>
    <Options v-if="optionsOpen"></Options>
    <Storage v-else-if="storageOpen"></Storage>
    <TabView
      v-else
      android:tabBackgroundColor="#29648A"
      android:tabTextColor="#c4ffdf"
      android:selectedTabTextColor="#ffffff"
      androidSelectedTabHighlightColor="#ffc400"
    >
      <TabViewItem :title="$t('search.title')">
        <Swimmers></Swimmers>
      </TabViewItem>
      <TabViewItem :title="$t('times.title')">
        <Times></Times>
      </TabViewItem>
      <TabViewItem :title="$t('calculate.title')">
        <Calculate></Calculate>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script lang="ts">
import Swimmers from "./search/Swimmers";
import Times from "./times/Times";
import Calculate from "./calculate/Calculate";
import Options from "./options/Options";
import Storage from './storage/Storage';

export default {
  components: {
    Times,
    Calculate,
    Options,
    Swimmers,
    Storage
  },
  data() {
    return {
      optionsOpen: false,
      storageOpen: false
    };
  },
  methods: {
    toggleOptions: function () {
      this.storageOpen = false;
      this.optionsOpen = !this.optionsOpen;
    },
    toggleStorage: function () {
      this.optionsOpen = false;
      this.storageOpen = !this.storageOpen;
    },
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #29648a;
  color: #ffffff;
}
GridLayout > * {
  background-color: #29648a;
  color: #ffffff;
}

Image {
  height: 24dp;
  width: 24dp;
}
</style>
