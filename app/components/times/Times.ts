import { Component, Mixins } from "vue-property-decorator";
// import './Times.scss'
import TestMixin from '@/mixins/TestMixin'
import { Swimmer } from '@/models/Swimmer';
import TimesItem from './TimesItem';


@Component({components: {TimesItem}})
export default class Times extends Mixins(TestMixin) {

    showTimesTop: boolean = true;

    getTestData: Swimmer[] = this.getTestResults();

    items(){
        const data = this.getTestData;
        return data;
    }
}