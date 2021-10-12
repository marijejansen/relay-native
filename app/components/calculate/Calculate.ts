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
import CalculateTop from '@/components/calculate/CalculateTop';
import CourseSelector from '@/components/selectors/CourseSelector';
import translate from '@/locales/i18n'

@Component({ components: { CalculateSelectionItem, CalculateRelayTeam, CalculateTop, CourseSelector } })
export default class Calculate extends Mixins(TestMixin, RelayMixin) {

    getTestData: Swimmer[] = this.getTestResults();

    private relay: number = store.getters['calculate/getRelay'];

    private visibleRelays: Relay[] = store.getters["getVisibleRelays"];

    private course: number = store.getters['calculate/getCourse'];

    private teams: IRelayTeam = store.getters['calculate/getTeams'];

    private selectionIsClosed: boolean = false;
    
    private clicked: boolean = false;

    private showNoResults: boolean = false;

    private calculated: boolean = false;

    get selected(): number[] { return store.getters['calculate/getSelectedForCalculation'] };

    get relayTeams(): IRelayTeam[] {
        var teams: IRelayTeam[] = store.getters['calculate/getTeams'];
        this.showNoResults = !(teams.length > 0) && this.calculated;
        return teams.sort((a, b) => a.age - b.age || b.gender - a.gender);
    }

    private showCalculateTop: boolean = false;

    selection(): Swimmer[] {
        return store.getters.getAllSelected;

        // var selection = this.getTestData;
        // selection.forEach(s => {
        //     store.commit("addToSelectedSwimmers", s);
        // })

        // return selection;
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

    get canCalculate() {
        return this.selected.length >= 4;
    }

    calculate() {
        if(this.canCalculate){
            this.calculated = true;
            this.showCalculateTop = true;
            this.setClicked();
            store.dispatch('calculate/calculateTeams', { selected: this.selected });
            store.commit("calculate/emptyRelayTeams");
            this.selectionIsClosed = true;
        }
    }

    setClicked() {
        this.clicked = true;
        setTimeout(() => { this.clicked = false }, 300);
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
}
