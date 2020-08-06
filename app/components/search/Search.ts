import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import searchRepository from '@/repositories/search-repository'
import store from '@/store/index';
import Selection from './Selection'
import SearchItem from './SearchItem'

import { TextField } from 'tns-core-modules/ui/text-field';

@Component({ components: { Selection, SearchItem } })
export default class Search extends Vue {

  private firstName: string = "";
  private lastName: string = "";

  private searched: boolean = false;

  private hasResults: boolean = this.results?.length > 0;

  private lastInput: TextField;

  searchResult?: Swimmer[] = [];

  onFirstTextfieldTap() {
    this.removeSearchInput();
  }

  selection(): Swimmer[] {
    return store.getters.getAllSelected;
  }

  results() {
    return this.searchResult;
  }

  fullName(id: number) {
    const result = this.searchResult.find(r => r.id === id);
    if (result) {
      return result.firstName + " " + result.lastName
    }
  }

  hasSelection() {
    return this.selection().length > 0;
  }

  // naar store
  async search() {
    this.setSearched();
    this.lastInput.dismissSoftInput();
    await searchRepository.getSearch(this.firstName, this.lastName)
      .then(response => this.searchResult = response);
  }

  setSearched() {
    this.searched = true;
    setTimeout(() => { this.searched = false }, 300);
  }

  removeSearchInput() {
    this.firstName = "";
    this.lastName = "";
  }

  textFieldLoaded(args) {
    let input = <TextField>args.object;
    this.lastInput = input;
  }
}