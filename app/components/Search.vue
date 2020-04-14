<template>
  <GridLayout columns="*, *" rows="*, *">
    <TextField row="0" col="0" v-model="firstName" hint="First name" />
    <TextField row="0" col="1" v-model="lastName" hint="Last name" />
    <Label :text="fullName()" row="1" col="0" textWrap="true"></Label>
  </GridLayout>
</template>

<!--<script lang="ts" scr="./Search.ts"></script>-->

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  private firstName: string = "";
  private lastName: string = "";

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
</script>

<style scoped>
  TextField {
    vertical-align: top;
    height: 110px;
    padding-left: 20px;
    border-width: 2px;
    border: 2px solid grey;
    border-radius: 5px;
    margin: 40px 10px 0 10px;
  }
</style>