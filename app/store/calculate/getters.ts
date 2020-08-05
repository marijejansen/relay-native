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

  getYear(state): number{
    return state.year;
  },

  getIsMasters(state): boolean {
    return state.isMasters;
  },

  getTeams(state): IRelayTeam[] {
    return state.relayTeams;
  }
}