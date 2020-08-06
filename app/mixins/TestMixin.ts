import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';


@Component
class TestMixin extends Vue {
    public getTestResults(): Swimmer[] {
        return [{
            id: 123,
            firstName: "Marije",
            lastName: "Jansen",
            birthYear: 1985,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 0,
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

        }, {
            id: 124,
            firstName: "Martijntje",
            lastName: "Giezen",
            birthYear: 1985,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 1,
            time: 0,
            //@ts-ignore
            longCourseTimes: {
                freestyle50M: 26.02,
                freestyle100M: 58.01,
                freestyle200M: 125.01,
                backstroke50M: 28.01,
                backstroke100M: 61.01,
                butterfly50M: 28.01,
                butterfly100M: 64.01,
                breaststroke50M: 31.01,
                breaststroke100M: 72.01
            },
            shortCourseTimes: {
                freestyle50M: 26.01,
                freestyle100M: 58.01,
                freestyle200M: 125.01,
                backstroke50M: 28.01,
                backstroke100M: 61.01,
                butterfly50M: 28.01,
                butterfly100M: 64.01,
                breaststroke50M: 31.01,
                breaststroke100M: 72.01
            },
        }, {
            id: 126,
            firstName: "Moskou",
            lastName: "Jansen",
            birthYear: 2000,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 1,
            time: 0,
            //@ts-ignore
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
            }
        }, {
            id: 125,
            firstName: "Brussel",
            lastName: "Giezen",
            birthYear: 1992,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 0,
            time: 0,
            //@ts-ignore
            longCourseTimes: {
                freestyle50M: 25.01,
                freestyle100M: 56.01,
                freestyle200M: 145.01,
                backstroke50M: 30.01,
                backstroke100M: 60.01,
                butterfly50M: 29.01,
                butterfly100M: 62.01,
                breaststroke50M: 32.01,
                breaststroke100M: 74.01
            },
            shortCourseTimes: {
                freestyle50M: 25.01,
                freestyle100M: 56.01,
                freestyle200M: 145.01,
                backstroke50M: 30.01,
                backstroke100M: 60.01,
                butterfly50M: 29.01,
                butterfly100M: 62.01,
                breaststroke50M: 32.01,
                breaststroke100M: 74.01
            }
        }, {
            id: 143,
            firstName: "Marije",
            lastName: "Jansen",
            birthYear: 1985,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 0,
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

        }, {
            id: 144,
            firstName: "Martijntje",
            lastName: "Giezen",
            birthYear: 1985,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 1,
            time: 0,
            //@ts-ignore
            longCourseTimes: {
                freestyle50M: 26.02,
                freestyle100M: 58.01,
                freestyle200M: 125.01,
                backstroke50M: 28.01,
                backstroke100M: 61.01,
                butterfly50M: 28.01,
                butterfly100M: 64.01,
                breaststroke50M: 31.01,
                breaststroke100M: 72.01
            },
            shortCourseTimes: {
                freestyle50M: 26.01,
                freestyle100M: 58.01,
                freestyle200M: 125.01,
                backstroke50M: 28.01,
                backstroke100M: 61.01,
                butterfly50M: 28.01,
                butterfly100M: 64.01,
                breaststroke50M: 31.01,
                breaststroke100M: 72.01
            },
        }, {
            id: 145,
            firstName: "Moskou",
            lastName: "Jansen",
            birthYear: 2000,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 1,
            time: 0,
            //@ts-ignore
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
            }
        }, {
            id: 146,
            firstName: "Brussel",
            lastName: "Giezen",
            birthYear: 1992,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 0,
            time: 0,
            //@ts-ignore
            longCourseTimes: {
                freestyle50M: 25.01,
                freestyle100M: 56.01,
                freestyle200M: 145.01,
                backstroke50M: 30.01,
                backstroke100M: 60.01,
                butterfly50M: 29.01,
                butterfly100M: 62.01,
                breaststroke50M: 32.01,
                breaststroke100M: 74.01
            },
            shortCourseTimes: {
                freestyle50M: 25.01,
                freestyle100M: 56.01,
                freestyle200M: 145.01,
                backstroke50M: 30.01,
                backstroke100M: 60.01,
                butterfly50M: 29.01,
                butterfly100M: 62.01,
                breaststroke50M: 32.01,
                breaststroke100M: 74.01
            }
        },{
            id: 153,
            firstName: "Marije",
            lastName: "Jansen",
            birthYear: 1985,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 0,
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

        }, {
            id: 154,
            firstName: "Martijntje",
            lastName: "Giezen",
            birthYear: 1985,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 1,
            time: 0,
            //@ts-ignore
            longCourseTimes: {
                freestyle50M: 26.02,
                freestyle100M: 58.01,
                freestyle200M: 125.01,
                backstroke50M: 28.01,
                backstroke100M: 61.01,
                butterfly50M: 28.01,
                butterfly100M: 64.01,
                breaststroke50M: 31.01,
                breaststroke100M: 72.01
            },
            shortCourseTimes: {
                freestyle50M: 26.01,
                freestyle100M: 58.01,
                freestyle200M: 125.01,
                backstroke50M: 28.01,
                backstroke100M: 61.01,
                butterfly50M: 28.01,
                butterfly100M: 64.01,
                breaststroke50M: 31.01,
                breaststroke100M: 72.01
            },
        }, {
            id: 156,
            firstName: "Moskou",
            lastName: "Jansen",
            birthYear: 2000,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 1,
            time: 0,
            //@ts-ignore
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
            }
        }, {
            id: 155,
            firstName: "Brussel",
            lastName: "Giezen",
            birthYear: 1992,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 0,
            time: 0,
            //@ts-ignore
            longCourseTimes: {
                freestyle50M: 25.01,
                freestyle100M: 56.01,
                freestyle200M: 145.01,
                backstroke50M: 30.01,
                backstroke100M: 60.01,
                butterfly50M: 29.01,
                butterfly100M: 62.01,
                breaststroke50M: 32.01,
                breaststroke100M: 74.01
            },
            shortCourseTimes: {
                freestyle50M: 25.01,
                freestyle100M: 56.01,
                freestyle200M: 145.01,
                backstroke50M: 30.01,
                backstroke100M: 60.01,
                butterfly50M: 29.01,
                butterfly100M: 62.01,
                breaststroke50M: 32.01,
                breaststroke100M: 74.01
            }
        }];
    }

    public getString(): string {
        return "JAAA";
    }
}

export default TestMixin;