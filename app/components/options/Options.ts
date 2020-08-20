import { Vue, Component } from "vue-property-decorator";
import './Options.scss'
import store from '@/store/index';
import translate from '@/locales/i18n'
import Selector from '@/components/selectors/Selector';


@Component({ components: { Selector}})
export default class Options extends Vue {
    
    private isMasters: number = Number(store.getters['isMasters']);

    private forYear: number = Number(store.getters['getForYear']);

    get yearIndex(): number{
        var years = this.getForYearItems;
        var year = this.forYear.toString();
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
        for(var i = 0; i < 4; i++){
            years.push((thisYear + i).toString())
        }

        return years;
    }

    setForYear(yearIndex: number) {
        var year = this.getForYearItems[yearIndex];
        store.commit('setForYear', Number(year));
        this.emptyRelayTeams();
    }

    setIsMasters(isMasters: number) {
        store.commit('setIsMasters', isMasters);
        this.emptyRelayTeams();
    }

    emptyRelayTeams(){
        store.commit("calculate/emptyRelayTeams");
    }

}