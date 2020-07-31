<template>
  <Page class="page">
    <ActionBar :title="$t('actionbar.message')" android:flat="true" />
    <TabView
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

export default {
  components: {
    Search,
    Times,
    Calculate,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #29648a;
  color: #ffffff;
}
</style>
