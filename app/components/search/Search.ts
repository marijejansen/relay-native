import { Component, Vue } from 'vue-property-decorator';
import { Swimmer } from '@/models/Swimmer';
import searchRepository from '@/repositories/search-repository';
import store from '@/store/index';
import Selection from './Selection';
import SearchItem from './SearchItem';

import { TextField } from 'tns-core-modules/ui/text-field';

@Component({ components: { Selection, SearchItem } })
export default class Search extends Vue {
  private firstName = '';
  private lastName = '';

  private searched = false;

  private searchActive = false;

  get hasResults(): boolean { return this.results?.length > 0; }

  private lastInput: TextField;

  searchResult?: Swimmer[] = [];

  onFirstTextfieldTap() {
    this.removeSearchInput();
  }

  selection(): Swimmer[] {
    return store.getters.getAllSelected;
  }

  get results() {
    return this.searchResult;
  }

  fullName(id: number) {
    const result = this.searchResult.find(r => r.id === id);
    if (result) {
      return result.firstName + ' ' + result.lastName;
    }
  }

  hasSelection() {
    return this.selection().length > 0;
  }

  async search() {
    this.setSearchActive();
    this.lastInput.dismissSoftInput();
    await searchRepository.getSearch(this.firstName, this.lastName)
      .then(response => {
        this.searchResult = response;
        this.searched = true;
      });
  }

  setSearchActive() {
    this.searchActive = true;
    setTimeout(() => { this.searchActive = false; }, 300);
  }

  removeSearchInput() {
    this.firstName = '';
    this.lastName = '';
  }

  textFieldLoaded(args) {
    const input = <TextField>args.object;
    this.lastInput = input;
  }
}
