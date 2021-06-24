<template>
  <Page class="page">
    <ActionBar :title="$t('actionbar.message')" android:flat="true">
      <GridLayout columns="5*, *, *">
        <Label class="title" :text="$t('actionbar.message')" col="0" />
        <Image
          class="load-icon"
          src="~/assets/images/load.png"
          stretch="fill"
          @tap="loadData"
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
import store from '@/store/index';

export default {
  components: {
    Times,
    Calculate,
    Options,
    Swimmers
  },
  data() {
    return {
      optionsOpen: false,
    };
  },
  methods: {
    toggleOptions: function () {
      this.optionsOpen = !this.optionsOpen;
    },
    loadData: function () {
      store.dispatch('getFromStorage');
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
  height: 70px;
  width: 70px;
}
</style>
