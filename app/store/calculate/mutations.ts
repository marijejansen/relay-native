import { MutationTree } from "vuex";
import { CalculateState } from "./types";
import { Course } from '@/models/Course';
import { Relay } from '@/models/relay';
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';

export const mutations: MutationTree<CalculateState> = {

  setCourse(state, course: Course) {
      state.course = course;  
  },

  setRelay(state, relay: Relay) {
    state.relay = relay;
  },

  addRelayTeams(state, teams: IRelayTeam[]) {
    state.relayTeams = teams;
  },
};
