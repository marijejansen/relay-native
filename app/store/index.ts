import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types';
import { Swimmer } from '@/models/Swimmer';
import searchRepository from '@/repositories/search-repository';
import { search } from './search';
import { calculate } from './calculate';


Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    search,
    calculate
  },

  state: {
    selectedSwimmers: Array<Swimmer>(),
    saving: false,
    fromYear: new Date().getFullYear() - 1,
  },

  getters: {
    getAllSelected(state): Swimmer[] {
      return state.selectedSwimmers;
    },

    getYear(state) {
      return state.fromYear;
    },

    getIsSaving(state) {
      return state.saving;
    }
  },

  mutations: {

    setIsSaving(state, save) {
      state.saving = save;
    },

    addToSelectedSwimmers(state, swimmer: Swimmer) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == swimmer.id);
      if (index != -1) {
        state.selectedSwimmers[index] = swimmer;
      } else {
        state.selectedSwimmers.push(swimmer);
      }
    },

    addSCTimes(state, payload) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == payload.id);
      state.selectedSwimmers[index].shortCourseTimes = payload.courseTimes;
    },

    addLCTimes(state, payload) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == payload.id);
      state.selectedSwimmers[index].longCourseTimes = payload.courseTimes;
    },

    removeFromSelectedSwimmers(state, swimmerId) {
      state.selectedSwimmers = state.selectedSwimmers.filter(
        sw => sw.id !== swimmerId
      );
    },
  },

  actions: {

    async updateWithTimes({ commit, getters }, swimmerId) {

      var year = getters.getYear;

      await searchRepository.getShortCourseTimes(swimmerId, year)
        .then((response) => {
          commit("addSCTimes", { id: swimmerId, courseTimes: response })
        });

      await searchRepository.getLongCourseTimes(swimmerId, year)
        .then((response) => {
          commit("addLCTimes", { id: swimmerId, courseTimes: response });
        });
      return "OK";
    },

  }
};

export default new Vuex.Store<RootState>(store);