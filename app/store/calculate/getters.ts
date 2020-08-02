import { CalculateState } from "./types";
import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { Relay } from '@/models/relay';
import { Course } from '@/models/Course';

export const getters: GetterTree<CalculateState, RootState> = {
  
  getCourse(state): Course {
    console.log("in getCourse")
    return state.course
  },

  getRelay(state): Relay{
    return state.relay;
  },
}