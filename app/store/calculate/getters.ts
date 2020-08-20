import { CalculateState } from "./types";
import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { Relay } from '@/models/relay';
import { Course } from '@/models/Course';
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';

export const getters: GetterTree<CalculateState, RootState> = {
  
  getCourse(state): Course {
    return state.course
  },

  getRelay(state): Relay{
    return state.relay;
  },

  getTeams(state): IRelayTeam[] {
    return state.relayTeams;
  },

  getSelectedForCalculation(state): number[] {
    return state.selectedForCalculation;
  }
}