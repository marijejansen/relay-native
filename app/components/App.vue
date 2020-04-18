<template>
    <Page>
        <ActionBar title="Welcome to Relay Calculator" android:flat="true"/>
        <TabView android:tabBackgroundColor="#29648A"
                 android:tabTextColor="#c4ffdf"
                 android:selectedTabTextColor="#ffffff"
                 androidSelectedTabHighlightColor="#ffc400">
             <TabViewItem title="Search">
               <Search></Search>
            </TabViewItem>
            <TabViewItem title="Times">
                <Times></Times>
            </TabViewItem>           
            <TabViewItem title="Calculate">
                <Calculate></Calculate>
            </TabViewItem>           
        </TabView>
    </Page>
</template>


<script lang="ts">
  import Search from './search/Search'
  import Times from './times/Times'
  import Calculate from './calculate/Calculate'

  export default {
    components: {
            Search,
            Times,
            Calculate
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
     ActionBar {
        background-color: #29648A;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #c22525;
    } 
</style>
