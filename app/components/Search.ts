import { Component, Vue } from "vue-property-decorator";
import './Search.scss'
import { Swimmer } from '@/models/Swimmer';
import searchRepository from '@/repositories/search-repository'

@Component
export default class Search extends Vue {
  private firstName: string = "";
  private lastName: string = "";

  searchResult?: Swimmer[] = [];

  results(){
    console.log("TEST:   results")
    //TODO: kan dit weg?
    if(this.searchResult != undefined){
      return this.searchResult;
    }
  }

  async search() {
    await searchRepository.getSearch(this.firstName, this.lastName)
      .then(response => this.searchResult = response);
      console.log("TEST:   search")
  }
}