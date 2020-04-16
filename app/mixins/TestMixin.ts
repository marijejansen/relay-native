import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';


@Component
class TestMixin extends Vue {

    public getTestResults() {
        const swimmers: Swimmer[] = [{
            id: 123,
            firstName: "Marije",
            lastName: "Jansen",
            birthYear: 1985,
            clubName: "ZPC Amersfoort",
            position: 0,
            gender: 0,
            time: 0,
            //@ts-ignore
            longCourseTimes: [],
            //@ts-ignore
            shortCourseTimes: [],

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
            longCourseTimes: [],
            //@ts-ignore
            shortCourseTimes: [],
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
            longCourseTimes: [],
            //@ts-ignore
            shortCourseTimes: [],
        }];

        return swimmers;
    }
}