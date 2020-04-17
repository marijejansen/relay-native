import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types';
import { Swimmer } from '@/models/Swimmer';
import searchRepository from '@/repositories/search-repository';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
    },

    state: {
        selectedSwimmers: Array<Swimmer>(),
        loading: false,
        fromYear: new Date().getFullYear() - 1,
    },

    getters: {
        getAllSelected(state){
            return state.selectedSwimmers;
          },

          getYear(state) {
            return state.fromYear;
          },
    },

    mutations: {
        addToSelectedSwimmers(state, swimmer) {
            var index = state.selectedSwimmers.findIndex(sw => sw.id == swimmer.id);
            if (index != -1) {
              state.selectedSwimmers[index] = swimmer;
            } else {
              state.selectedSwimmers.push(swimmer);
            }
          },

          removeFromSelectedSwimmers(state, swimmerId) {
            state.selectedSwimmers = state.selectedSwimmers.filter(
              sw => sw.id !== swimmerId
            );
          },
    },

    actions: {

      async updateWithTimes({ commit, getters }, swimmerId) {
        console.log("TEST: updateWithTimes action");

        var year = getters.getYear;
  
        await searchRepository.getShortCourseTimes(swimmerId, year)
          .then((response) => {
            commit("addSCTimes", { id: swimmerId, courseTimes: response })
          });
  
        await searchRepository.getLongCourseTimes(swimmerId, year)
          .then((response) => {
            commit("addLCTimes", { id: swimmerId, courseTimes: response });
          });
      },

    }
};

export default new Vuex.Store<RootState>(store);