import { MutationTree } from "vuex";
import { SearchState } from "./types";

export const mutations: MutationTree<SearchState> = {

  setTimesLoaded(state, swimmerId) {
    if (state.loadedTimes.find(t => t == swimmerId) == null) {
      state.loadedTimes.push(swimmerId);
    }
  },
  removeTimesLoaded(state, swimmerId) {
    state.loadedTimes = state.loadedTimes.filter(t => t !== swimmerId);
  }
};
