import { Component, Vue, Mixins } from "vue-property-decorator";
import './Calculate.scss'
import { Swimmer } from '@/models/Swimmer';
import TestMixin from '@/mixins/TestMixin';
import RelayMixin from '@/mixins/RelayMixins';
import CalculateSelectionItem from '@/components/calculate/CalculateSelectionItem'
import CalculateRelayTeam from '@/components/calculate/CalculateRelayTeam'
import { Relay } from '@/models/relay';
import { Course } from '@/models/Course';
import store from '@/store/index';
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';

@Component({ components: {CalculateSelectionItem, CalculateRelayTeam} })
export default class Calculate extends Mixins(TestMixin, RelayMixin){

    getTestData: Swimmer[] = this.getTestResults();

    private relay: number = store.getters['calculate/getRelay'];

    private course: number = store.getters['calculate/getCourse'];

    private teams: IRelayTeam = store.getters['calculate/getTeams'];

    get relayTeams(){
        return store.getters['calculate/getTeams'];
    }

    selection(): Swimmer[] {
        // return this.getTestData;
        return store.getters.getAllSelected;
    }

    relayLabel() {
        return this.getRelayString(Relay[this.relay])
      }

    courseLabel(): string{
        return this.getCourseString(Course[this.course]);
    }

    nextRelay() {
        this.setRelay((this.relay + 1) % 5);
    }

    prevRelay() {
        this.setRelay(((this.relay + 4) % 5));
    }

    setRelay(newNumber: number){
        this.relay = newNumber;
    }

    nextCourse() {
        this.setCourse((this.course + 1) % 2);
    }

    setCourse(newNumber: number){
        this.course = newNumber;
    }

    calculate(){
        console.log("calc");
        store.commit('calculate/setCourse', this.course);
        store.commit('calculate/setRelay', this.relay);
        store.dispatch('calculate/calculateTeams');

    }
}
