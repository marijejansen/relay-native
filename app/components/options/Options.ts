import { Vue, Component } from "vue-property-decorator";
import './Options.scss'
import store from '@/store/index';
import translate from '@/locales/i18n'
import Selector from '@/components/selectors/Selector';
import OptionsAdd from './OptionsAdd';

@Component({ components: { OptionsAdd, Selector } })
export default class Options extends Vue {

    private isMasters: number = Number(store.getters['isMasters']);

    private forYear: number = Number(store.getters['getForYear']);

    private fromYear: number = Number(store.getters['getFromYear']);

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
        console.log("      isMasters:      " + Number(this.isMasters));

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

    setForYear(yearIndex: number) {
        var year = this.getForYearItems[yearIndex];
        store.commit('setForYear', Number(year));
        this.emptyRelayTeams();
    }

    setFromYear(yearIndex: number) {
        var year = this.getFromYearItems[yearIndex];
        store.commit('setFromYear', Number(year));
        this.emptyRelayTeams();
    }

    setIsMasters(isMasters: number) {
        store.commit('setIsMasters', isMasters);
        this.emptyRelayTeams();
    }

    emptyRelayTeams() {
        store.commit("calculate/emptyRelayTeams");
    }
}