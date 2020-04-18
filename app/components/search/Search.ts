import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import searchRepository from '@/repositories/search-repository'
import store from '@/store/index';
import Selection from './Selection'

@Component({components: {Selection} })
export default class Search extends Vue {
  
  private firstName: string = "";
  private lastName: string = "";

  searchResult?: Swimmer[] = [];
  
  selection() : Swimmer[]{
    return store.getters.getAllSelected;
  }
  
  results(){
    return this.searchResult;
  }
  
  fullName(id: number) {
    const result = this.searchResult.find(r => r.id === id);
    if(result){
      return result.firstName + " " + result.lastName
    }
  }
  
  hasSelection() {
    return this.selection().length > 0;
  }

  // naar store
  async search() {
    await searchRepository.getSearch(this.firstName, this.lastName)
      .then(response => this.searchResult = response);
  }

  select(id: number) {
    const swimmer = this.searchResult.find(s => s.id == id);  
    store.commit("addToSelectedSwimmers", swimmer);
    this.updateWithTimes(id);
  }

  async updateWithTimes(id: number){
    store.dispatch('updateWithTimes', id).then(response =>{
      store.commit('search/setTimesLoaded', id);
    }
    );
  }
}