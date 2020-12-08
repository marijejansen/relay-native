import { Vue, Component } from "vue-property-decorator";
import './Options.scss'
import store from '@/store/index';
import translate from '@/locales/i18n'
import Selector from '@/components/selectors/Selector';
import OptionsAdd from './OptionsAdd';

@Component({ components: { OptionsAdd, Selector } })
export default class Options extends Vue {

    private isMasters: number;

    private forYear: number;

    private fromYear: number;

    private changed: boolean = false;

    private fromYearChanged: boolean = false;

    private buttonIsClicked: boolean = false;

    beforeCreate(){
        this.isMasters = Number(store.getters['isMasters']);
        this.forYear = Number(store.getters['getForYear']);
        this.fromYear = Number(store.getters['getFromYear']);
    }

    get yearIndex(): number {
        var years = this.getForYearItems;
        var year = this.forYear.toString();
        var index = years.findIndex(y => y === year);
        return index;
    }

    get fromYearIndex(): number {
        var years = this.getFromYearItems;
        var year = this.fromYear.toString();
        var index = years.findIndex(y => y === year);
        return index;
    }

    get isMastersItems(): string[] {
        var items: string[] = [translate.t('options.ageGroups.allin').toString(), translate.t('options.ageGroups.masters').toString()];
        return items;
    }

    get getForYearItems(): string[] {
        var thisYear = (new Date()).getFullYear();
        var years: string[] = [];
        for (var i = 0; i < 4; i++) {
            years.push((thisYear + i).toString())
        }

        return years;
    }

    get getFromYearItems(): string[] {
        var thisYear = (new Date()).getFullYear();
        var years: string[] = [];
        for (var i = 0; i < 4; i++) {
            years.push((thisYear - i).toString())
        }

        return years.sort();
    }
    
    get optionsChanged(){
        return this.changed;
    }

    activateButton() {
        this.buttonIsClicked = true;
        setTimeout(() => { this.buttonIsClicked = false,  this.changed = false}, 800);
    }
    
    setForYear(yearIndex: number) {
        this.forYear = Number(this.getForYearItems[yearIndex]);
        this.changed = true;
    }

    setFromYear(yearIndex: number) {
        this.fromYear = Number(this.getFromYearItems[yearIndex]);
        this.changed = true;
        this.fromYearChanged = true;
    }

    setIsMasters(isMasters: number) {
        this.isMasters = isMasters;
        this.changed = true;
    }

    saveOptions(){
        this.activateButton();
        store.commit('setForYear', this.forYear);
        store.commit('setFromYear', this.fromYear);
        store.commit('setIsMasters', this.isMasters);

        this.emptyRelayTeams();

        if(this.fromYearChanged){
            store.dispatch('updateAllWithTimes');
        }
    }

    emptyRelayTeams() {
        store.commit("calculate/emptyRelayTeams");
    }
}