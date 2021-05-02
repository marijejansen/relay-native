import { Component, Vue } from 'vue-property-decorator';
import { Swimmer } from '@/models/Swimmer';

@Component
class TestMixin extends Vue {
  public getTestResults(): Swimmer[] {
    return [{
      id: 123,
      firstName: 'John',
      lastName: 'Petersen',
      birthYear: 1998,
      clubName: 'AquaTeam Swimming',
      position: 0,
      gender: 1,
      time: 0,
      longCourseTimes: {
        freestyle50M: 26.02,
        freestyle100M: 56.73,
        freestyle200M: 122.04,
        backstroke50M: 29.01,
        backstroke100M: 59.01,
        butterfly50M: 27.01,
        butterfly100M: 58.02,
        breaststroke50M: 29.01,
        breaststroke100M: 76.01
      },
      shortCourseTimes: {
        freestyle50M: 26.02,
        freestyle100M: 56.73,
        freestyle200M: 122.04,
        backstroke50M: 29.01,
        backstroke100M: 59.01,
        butterfly50M: 27.01,
        butterfly100M: 58.02,
        breaststroke50M: 29.01,
        breaststroke100M: 76.01
      },
      isCustom: true
    }, {
      id: 124,
      firstName: 'Iona',
      lastName: 'Spijker',
      birthYear: 2001,
      clubName: 'AquaTeam Swimming',
      position: 0,
      gender: 0,
      time: 0,
      // @ts-ignore
      longCourseTimes: {
        freestyle50M: 28.01,
        freestyle100M: 61.01,
        freestyle200M: 145.01,
        backstroke50M: 32.01,
        backstroke100M: 70.01,
        butterfly50M: 31.01,
        butterfly100M: 70.01,
        breaststroke50M: 40.01,
        breaststroke100M: 85.01
      },
      shortCourseTimes: {
        freestyle50M: 28.01,
        freestyle100M: 61.01,
        freestyle200M: 145.01,
        backstroke50M: 32.01,
        backstroke100M: 70.01,
        butterfly50M: 31.01,
        butterfly100M: 70.01,
        breaststroke50M: 40.01,
        breaststroke100M: 85.01
      },
      isCustom: true
    }, {
      id: 126,
      firstName: 'Marcella',
      lastName: 'Metz',
      birthYear: 1992,
      clubName: 'AquaTeam Swimming',
      position: 0,
      gender: 0,
      time: 0,
      // @ts-ignore
      longCourseTimes: {
        freestyle50M: 27.01,
        freestyle100M: 59.01,
        freestyle200M: 130.01,
        backstroke50M: 30.01,
        backstroke100M: 63.01,
        butterfly50M: 29.01,
        butterfly100M: 64.01,
        breaststroke50M: 35.01,
        breaststroke100M: 72.01
      },
      shortCourseTimes: {
        freestyle50M: 27.01,
        freestyle100M: 59.01,
        freestyle200M: 130.01,
        backstroke50M: 30.01,
        backstroke100M: 63.01,
        butterfly50M: 29.01,
        butterfly100M: 64.01,
        breaststroke50M: 35.01,
        breaststroke100M: 72.01
      },
      isCustom: true
    }, {
      id: 125,
      firstName: 'Yann',
      lastName: 'Adamic',
      birthYear: 1988,
      clubName: 'AquaTeam Swimming',
      position: 0,
      gender: 1,
      time: 0,
      // @ts-ignore
      longCourseTimes: {
        freestyle50M: 25.01,
        freestyle100M: 56.01,
        freestyle200M: 145.01,
        backstroke50M: 27.01,
        backstroke100M: 58.01,
        butterfly50M: 29.01,
        butterfly100M: 62.01,
        breaststroke50M: 32.01,
        breaststroke100M: 74.01
      },
      shortCourseTimes: {
        freestyle50M: 25.01,
        freestyle100M: 56.01,
        freestyle200M: 145.01,
        backstroke50M: 27.01,
        backstroke100M: 58.01,
        butterfly50M: 29.01,
        butterfly100M: 62.01,
        breaststroke50M: 32.01,
        breaststroke100M: 74.01
      },
      isCustom: true
    }, {
      id: 143,
      firstName: 'Malik',
      lastName: 'Romano',
      birthYear: 2000,
      clubName: 'AquaTeam Swimming',
      position: 0,
      gender: 1,
      time: 0,
      longCourseTimes: {
        freestyle50M: 28.02,
        freestyle100M: 61.73,
        freestyle200M: 145.04,
        backstroke50M: 32.01,
        backstroke100M: 70.01,
        butterfly50M: 31.01,
        butterfly100M: 70.02,
        breaststroke50M: 40.01,
        breaststroke100M: 85.01
      },
      shortCourseTimes: {
        freestyle50M: 28.01,
        freestyle100M: 61.02,
        freestyle200M: 145.01,
        backstroke50M: 32.04,
        backstroke100M: 70.02,
        butterfly50M: 31.03,
        butterfly100M: 70.02,
        breaststroke50M: 40.02,
        breaststroke100M: 85.02
      },
      isCustom: true
    }];
  }
}

export default TestMixin;
