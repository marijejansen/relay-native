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
import RelaySelector from '@/components/selectors/RelaySelector';
import CourseSelector from '@/components/selectors/CourseSelector';

@Component({ components: { CalculateSelectionItem, CalculateRelayTeam, RelaySelector, CourseSelector } })
export default class Calculate extends Mixins(TestMixin, RelayMixin) {

    getTestData: Swimmer[] = this.getTestResults();

    private relay: number = store.getters['calculate/getRelay'];

    private course: number = store.getters['calculate/getCourse'];

    private teams: IRelayTeam = store.getters['calculate/getTeams'];

    private selected: number[] = [];

    get relayTeams() {
        return store.getters['calculate/getTeams'];
    }

    selection(): Swimmer[] {
        return store.getters.getAllSelected;
    }

    relayLabel() {
        return this.getRelayString(Relay[this.relay])
    }

    courseLabel(): string {
        return this.getCourseString(Course[this.course]);
    }

    nextRelay() {
        this.setRelay((this.relay + 1) % 5);
    }

    prevRelay() {
        this.setRelay(((this.relay + 4) % 5));
    }

    setRelay(newNumber: number) {
        this.relay = newNumber;
    }

    nextCourse() {
        this.setCourse((this.course + 1) % 2);
    }

    setCourse(newNumber: number) {
        this.course = newNumber;
    }

    calculate() {
        store.dispatch('calculate/calculateTeams', { selected: this.selected });
    }

    setActive(id: number, active: boolean) {
        var index = this.selected?.findIndex(s => s === id);
        if (active && index === -1 || index == null) {
            this.selected.push(id);
        }
        else if (!active && index !== -1) {
            this.selected = this.selected.filter(
                s => s !== id
            );
        }
    }
}
