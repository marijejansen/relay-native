import { Gender } from "./gender";
import { ICourseTimes } from "./interfaces/ICourseTimes";

export interface Swimmer {
  id: number;
  position: number;
  firstName: string;
  lastName: string;
  birthYear: number;
  gender: Gender;
  clubName: string;
  shortCourseTimes: ICourseTimes;
  longCourseTimes: ICourseTimes;
  time: number;
  isCustom: boolean;
}