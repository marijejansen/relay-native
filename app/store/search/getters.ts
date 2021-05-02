import { SearchState } from './types';
import { RootState } from '@/store/types';
import { GetterTree } from 'vuex';

export const getters: GetterTree<SearchState, RootState> = {

  getSearchResult(state) {
    return state.searchResult;
  },

  timesLoaded(state): number[] {
    return state.loadedTimes;
  }
};
