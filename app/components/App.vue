<template>
  <Page class="page">
    <ActionBar :title="$t('actionbar.message')" android:flat="true">
      <GridLayout columns="5*, *">
        <Label class="title" :text="$t('actionbar.message')" col="0" />
        <Label text="(())" @tap="toggleOptions" col="1" />
      </GridLayout>
    </ActionBar>/>
    <Options v-if="optionsOpen"></Options>
    <TabView
      v-else
      android:tabBackgroundColor="#29648A"
      android:tabTextColor="#c4ffdf"
      android:selectedTabTextColor="#ffffff"
      androidSelectedTabHighlightColor="#ffc400">
      <TabViewItem :title="$t('search.title')">
        <Search></Search>
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
import Search from "./search/Search";
import Times from "./times/Times";
import Calculate from "./calculate/Calculate";
import Options from "./options/Options";

export default {
  components: {
    Search,
    Times,
    Calculate,
    Options
  },
  data() {
    return {
      optionsOpen: false,
    };
  },
  methods: {
      toggleOptions: function () {
        this.optionsOpen = !this.optionsOpen;
    }
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
</style>
