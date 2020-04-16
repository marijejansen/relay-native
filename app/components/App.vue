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
                <GridLayout columns="*" rows="*">
                    <Label class="message" text="Tab 2 Content" col="0" row="0"/>
                </GridLayout>

            </TabViewItem>
            <TabViewItem title="Calculate">
                <GridLayout columns="*" rows="*">
                    <Label class="message" text="Tab 3 Content" col="0" row="0"/>
                </GridLayout>
            </TabViewItem>
        </TabView>
    </Page>
    
</template>

<script lang="ts">
  import Search from './search/Search'

  export default {
    components: {
            Search
    },
    data() {
      return {
        msg: 'Hello World!'
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
