import { ICourseTimes } from './interfaces/ICourseTimes';

export class CourseTimes implements ICourseTimes {
    freestyle50M: number;
    freestyle100M: number;
    freestyle200M: number;
    backstroke50M: number;
    backstroke100M: number;
    breaststroke50M: number;
    breaststroke100M: number;
    butterfly50M: number;
    butterfly100M: number;

    constructor() {
      this.freestyle50M = 0;
      this.freestyle100M = 0;
      this.freestyle200M = 0;
      this.backstroke50M = 0;
      this.backstroke100M = 0;
      this.breaststroke50M = 0;
      this.breaststroke100M = 0;
      this.butterfly50M = 0;
      this.butterfly100M = 0;
    }
}
