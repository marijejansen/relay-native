<template>
  <Page class="page">
    <ActionBar :title="$t('actionbar.message')" android:flat="true">
      <GridLayout columns="*, 5*, *, *">
        <!-- <Label class="title" :text="$t('actionbar.message')" col="0" /> -->
        <Image
          v-if="!homeOpen"
          class="home-icon"
          :src="homeActive ? '~/assets/images/long-arrow-active.png' : '~/assets/images/long-arrow.png'"
          stretch="fill"
          @tap="toggleHome"
          col="0"
        />
        <Label col="1"></Label>
        <Image
          class="load-icon"
          :src="storageActive ? '~/assets/images/load-active.png' : '~/assets/images/load.png'"
          stretch="fill"
          @tap="toggleStorage"
          col="2"
        />
        <Image
          class="options-icon"
          :src="optionsActive ? '~/assets/images/options-active.png' : '~/assets/images/options.png'"
          stretch="fill"
          @tap="toggleOptions"
          col="3"
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
      storageOpen: false,
      homeOpen: true,
      homeActive: false,
      optionsActive: false,
      storageActive: false,
    };
  },
  methods: {
    toggleOptions: function () {
      this.optionsActive = true;
      setTimeout(() => { 
        this.optionsActive = false
        this.storageOpen = false;
        this.homeOpen = this.optionsOpen;
        this.optionsOpen = !this.optionsOpen;
        }, 100);
    },
    toggleStorage: function () {
      this.storageActive = true;
      setTimeout(() => { 
        this.storageOpen = true;   
        this.storageActive = false
        this.optionsOpen = false;
        this.homeOpen = false;
        }, 100);
    },
    toggleHome: function () {
      if(!this.homeOpen){
        this.homeActive = true;
        setTimeout(() => { 
          this.homeActive = false;
          this.homeOpen = true;
          this.storageOpen = false;
          this.optionsOpen = false;  
        }, 100);
      }
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

Image.home-icon {
  left: 0px;
}

Image {
  float: left;
  height: 24dp;
  width: 24dp;
}
</style>
