import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types';
import { Swimmer } from '@/models/Swimmer';
import searchRepository from '@/repositories/search-repository';
import { search } from './search';
import { calculate } from './calculate';
import { StorageData } from "@/models/StorageData";


const appSettings = require("tns-core-modules/application-settings");
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
    forYear: (new Date()).getFullYear(),
    isMasters: true,
    storageData: Array<StorageData>()
  },

  getters: {
    getAllSelected(state): Swimmer[] {
      return state.selectedSwimmers;
    },

    getFromYear(state) {
      return state.fromYear;
    },

    getIsSaving(state) {
      return state.saving;
    },

    isMasters(state): boolean {
      return state.isMasters;
    },

    getForYear(state): number {
      return state.forYear;
    },

    getStorageData(state): StorageData[] {
      return state.storageData
    }
  },


  mutations: {

    setIsSaving(state, save) {
      state.saving = save;
    },

    addToSelectedSwimmers(state, swimmer: Swimmer) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id === swimmer.id);
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

    setIsMasters(state, isMasters: boolean) {
      state.isMasters = isMasters;
    },

    setForYear(state, year: number) {
      state.forYear = year;
    },

    setFromYear(state, year: number) {
      state.fromYear = year;
    }
  },

  actions: {

    saveToStorage({getters}, storageData: StorageData) {
      const currentData: StorageData[] = JSON.parse(appSettings.getString("swimmers", "[]"));
      currentData.push(storageData);
      appSettings.setString("swimmers", JSON.stringify(currentData));
    },

    getFromStorage(): void {
      const storageData: StorageData[] = JSON.parse(appSettings.getString("swimmers", "[]"));    
      this.state.storageData = storageData;    
    },

    deleteInStorage({}, id: number): void {
      var currentData: StorageData[] = JSON.parse(appSettings.getString("swimmers", "[]"));
      currentData = currentData.filter(d => d.id !== id);
      appSettings.setString("swimmers", JSON.stringify(currentData));
    },

    async updateAllWithTimes({ dispatch, getters }) {
      var swimmersIds = getters.getAllSelected.filter((sw: Swimmer) => !sw.isCustom).map((sw: Swimmer) => sw.id);

      await Promise.all(swimmersIds.forEach((id: number) => {
        dispatch('updateWithTimes', id);
      }));
    },

    async updateWithTimes({ commit, getters }, swimmerId) {

      var year = getters.getFromYear;
      var swimmer: Swimmer = getters.getAllSelected.find((sw: Swimmer) => sw.id == swimmerId)
      if (swimmer.isCustom) {
        return;
      }

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