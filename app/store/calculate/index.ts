import { Module } from 'vuex';
import { RootState } from '../types';
import { CalculateState } from './types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { Course } from '@/models/Course';
import { Relay } from '@/models/relay';

export const state: CalculateState = {
  course: Course.ShortCourse,
  relay: Relay.Free200,
  relayTeams: [],
  selectedForCalculation: []
};

export const calculate: Module<CalculateState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
