<template>
  <Label class="message" :text="msg" col="0" row="0"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class MyComp extends Vue {
  private msg: string = 'YESYESYESYES';
}
</script>