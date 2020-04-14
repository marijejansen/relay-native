import { Component, Vue } from "vue-property-decorator";


@Component
export default class Search extends Vue {
  private firstName: string = "";
  private lastName: string = "";

  fullName(){
    return this.firstName + ' ' + this.lastName;
  } 
}