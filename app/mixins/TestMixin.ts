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
                freestyle50M: 28.00,
                freestyle100M: 61.00,
                freestyle200M: 145.00,
                backstroke50M: 32.00,
                backstroke100M: 70.00,
                butterfly50M: 31.00,
                butterfly100M: 70.00,
                breaststroke50M: 40.00,
                breaststroke100M: 85.00
            },
            shortCourseTimes: {
                freestyle50M: 28.00,
                freestyle100M: 61.00,
                freestyle200M: 145.00,
                backstroke50M: 32.00,
                backstroke100M: 70.00,
                butterfly50M: 31.00,
                butterfly100M: 70.00,
                breaststroke50M: 40.00,
                breaststroke100M: 85.00
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
                freestyle50M: 26.00,
                freestyle100M: 58.00,
                freestyle200M: 125.00,
                backstroke50M: 28.00,
                backstroke100M: 61.00,
                butterfly50M: 28.00,
                butterfly100M: 64.00,
                breaststroke50M: 31.00,
                breaststroke100M: 72.00
            },
            shortCourseTimes: {
                freestyle50M: 26.00,
                freestyle100M: 58.00,
                freestyle200M: 125.00,
                backstroke50M: 28.00,
                backstroke100M: 61.00,
                butterfly50M: 28.00,
                butterfly100M: 64.00,
                breaststroke50M: 31.00,
                breaststroke100M: 72.00
            },
        }, {
            id: 124,
            firstName: "Moskou",
            lastName: "Jansen",
            birthYear: 2013,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 1,
            time: 0,
            //@ts-ignore
            longCourseTimes: {
                freestyle50M: 28.00,
                freestyle100M: 61.00,
                freestyle200M: 145.00,
                backstroke50M: 32.00,
                backstroke100M: 70.00,
                butterfly50M: 31.00,
                butterfly100M: 70.00,
                breaststroke50M: 40.00,
                breaststroke100M: 85.00
            },
            shortCourseTimes: {
                freestyle50M: 28.00,
                freestyle100M: 61.00,
                freestyle200M: 145.00,
                backstroke50M: 32.00,
                backstroke100M: 70.00,
                butterfly50M: 31.00,
                butterfly100M: 70.00,
                breaststroke50M: 40.00,
                breaststroke100M: 85.00
            },
        }];
    }

    public getString(): string{
        return "JAAA";
    }
}

export default TestMixin;