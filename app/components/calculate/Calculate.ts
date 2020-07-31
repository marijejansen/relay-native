import { Component, Vue, Mixins } from "vue-property-decorator";
import './Calculate.scss'
import { Swimmer } from '@/models/Swimmer';
import TestMixin from '@/mixins/TestMixin';
import RelayMixin from '@/mixins/RelayMixins';
import CalculateSelectionItem from '@/components/calculate/CalculateSelectionItem'
import { Relay } from '@/models/relay';
import { Course } from '@/models/Course';
import store from '@/store/index';

@Component({ components: {CalculateSelectionItem} })
export default class Calculate extends Mixins(TestMixin, RelayMixin){

    getTestData: Swimmer[] = this.getTestResults();

    private activeRelayNumber: number = 0;

    private activeCourseNumber: number = 0;

    private relay: string = Relay[0];

    private course: string = Course[0];

    selection(): Swimmer[] {
        // return this.getTestData;
        return store.getters.getAllSelected;
    }

    relayLabel() {
        return this.getRelayString(this.relay)
      }

    courseLabel(): string{
        return this.getCourseString(this.course);
    }

    nextRelay() {
        this.setRelay((this.activeRelayNumber + 1) % 5);
    }

    prevRelay() {
        this.setRelay(((this.activeRelayNumber + 4) % 5));
    }

    setRelay(newNumber: number){
        this.activeRelayNumber = newNumber;
        this.relay = Relay[newNumber];
    }

    nextCourse() {
        this.setCourse((this.activeCourseNumber + 1) % 2);
    }

    setCourse(newNumber: number){
        this.activeCourseNumber = newNumber;
        this.course = Course[newNumber];
    }
}
