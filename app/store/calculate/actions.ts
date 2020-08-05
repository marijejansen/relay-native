import { ActionTree } from "vuex";
import { CalculateState } from "./types";
import { RootState } from "@/store/types";
import calculateRepository from '@/repositories/calculate-repository';
import { Course } from '@/models/Course';
import { Relay } from '@/models/relay';
import { ICalculationRequest } from '@/models/interfaces/ICalculationRequest';
import { Swimmer } from '@/models/Swimmer';

export const actions: ActionTree<CalculateState, RootState> = {

  async calculateTeams({ commit, getters, rootState }) {

    var request: ICalculationRequest = {
      Relay: getters.getRelay,
      Course: getters.getCourse,
      CalculateForYear: getters.getYear,
      Swimmers: rootState.selectedSwimmers
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