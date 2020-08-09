import { ActionTree } from "vuex";
import { CalculateState } from "./types";
import { RootState } from "@/store/types";
import calculateRepository from '@/repositories/calculate-repository';
import { ICalculationRequest } from '@/models/interfaces/ICalculationRequest';
import { Swimmer } from '@/models/Swimmer';

export const actions: ActionTree<CalculateState, RootState> = {

  async calculateTeams({ commit, getters, state, rootState }, payload) {

    var selection: Swimmer[] = []

    payload.selected.forEach(id => {
      var swimmer = rootState.selectedSwimmers.find(sw => sw.id == id);
      selection.push(swimmer);
    })

    var request: ICalculationRequest = {
      Relay: state.relay,
      Course: state.course,
      CalculateForYear: getters.getYear,
      Swimmers: selection
    }

    if (getters.getIsMasters) {
      await calculateRepository.getRelayTeamsMasters(request)
        .then((response) => {
          commit("addRelayTeams", response)
        });
    } else {
      await calculateRepository.getRelayTeamsAllIn(request)
        .then((response) => {
          commit("addRelayTeams", response)
        });
    }
  }
};