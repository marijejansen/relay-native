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

        var course: Course = getters.getCourse;
        var relay: Relay = getters.getRelay;
        var swimmers: Swimmer[] = rootState.selectedSwimmers;
  
        var request: ICalculationRequest = {
            Relay: relay,
            Course: course,
            CalculateForYear: 2020,
            Swimmers: swimmers
        }

        await calculateRepository.getRelayTeamsAllIn(request)
          .then((response) => {
          });
        }
  
};