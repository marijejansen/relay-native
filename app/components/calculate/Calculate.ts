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
import translate from '@/locales/i18n'

@Component({ components: { CalculateSelectionItem, CalculateRelayTeam, RelaySelector, CourseSelector } })
export default class Calculate extends Mixins(TestMixin, RelayMixin) {

    getTestData: Swimmer[] = this.getTestResults();

    private relay: number = store.getters['calculate/getRelay'];

    private course: number = store.getters['calculate/getCourse'];

    private teams: IRelayTeam = store.getters['calculate/getTeams'];

    private selected: number[] = [];

    private selectionIsClosed: boolean = false;

    get relayTeams(): IRelayTeam[] {
        var teams: IRelayTeam[] = store.getters['calculate/getTeams'];
        this.showCalculateTop = teams.length > 0 ? true : false;
        return teams;
    }

    private showCalculateTop: boolean = false;

    selection(): Swimmer[] {
        //return store.getters.getAllSelected;

        var selection = this.getTestData;
        selection.forEach(s => {
            store.commit("addToSelectedSwimmers", s);
        })
        
        return selection;
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
        this.selectionIsClosed = true;
    }

    selectedText(): string {
        var selectedNumber = this.selected.length;
        var selectionNumber = this.selection().length;
        if (selectedNumber === selectionNumber) {
            return translate.t('calculate.selection.text.allSelected').toString();
        } else if (selectedNumber === 0) {
            return translate.t('calculate.selection.text.noSelected').toString();
        } else {
            return `${selectedNumber} ${translate.t('calculate.selection.text.numberSelected.first').toString()} ${selectionNumber} ${translate.t('calculate.selection.text.numberSelected.second').toString()}`
        }
    }

    openSelection() {
        this.selectionIsClosed = false;
    }

    isSelected(id: number): boolean {
        var index = this.selected?.findIndex(s => s === id);
        return index !== -1;
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

    created() {
        this.selection().forEach(s => this.setActive(s.id, true));
    }
}
