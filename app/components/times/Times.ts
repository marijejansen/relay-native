import { Component, Mixins } from "vue-property-decorator";
// import './Times.scss'
import TestMixin from '@/mixins/TestMixin'
import { Swimmer } from '@/models/Swimmer';


@Component({components: {}})
export default class Times extends Mixins(TestMixin) {

    getTestData: Swimmer[] = this.getTestResults();

    test(){
        const data = this.getTestData;
        return data;
    }

    test2(){
        return ["ja", "nee"];
    }
}