import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types';
import { Swimmer } from '@/models/Swimmer';

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

    }
};

export default new Vuex.Store<RootState>(store);