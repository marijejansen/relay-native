import { Vue, Component } from 'vue-property-decorator';
import './Options.scss';
import store from '@/store/index';
import translate from '@/locales/i18n';
import Selector from '@/components/selectors/Selector';
import OptionsAdd from './OptionsAdd';

@Component({ components: { OptionsAdd, Selector } })
export default class Options extends Vue {
    private isMasters: number;

    private forYear: number;

    private fromYear: number;

    private changed = false;

    private fromYearChanged = false;

    private buttonIsClicked = false;

    beforeCreate() {
      this.isMasters = Number(store.getters.isMasters);
      this.forYear = Number(store.getters.getForYear);
      this.fromYear = Number(store.getters.getFromYear);
    }

    get yearIndex(): number {
      const years = this.getForYearItems;
      const year = this.forYear.toString();
      const index = years.findIndex(y => y === year);
      return index;
    }

    get fromYearIndex(): number {
      const years = this.getFromYearItems;
      const year = this.fromYear.toString();
      const index = years.findIndex(y => y === year);
      return index;
    }

    get isMastersItems(): string[] {
      const items: string[] = [translate.t('options.ageGroups.allin').toString(), translate.t('options.ageGroups.masters').toString()];
      return items;
    }

    get getForYearItems(): string[] {
      const thisYear = (new Date()).getFullYear();
      const years: string[] = [];
      for (let i = 0; i < 4; i++) {
        years.push((thisYear + i).toString());
      }

      return years;
    }

    get getFromYearItems(): string[] {
      const thisYear = (new Date()).getFullYear();
      const years: string[] = [];
      for (let i = 0; i < 4; i++) {
        years.push((thisYear - i).toString());
      }

      return years.sort();
    }

    get optionsChanged() {
      return this.changed;
    }

    activateButton() {
      this.buttonIsClicked = true;
      setTimeout(() => { this.buttonIsClicked = false, this.changed = false; }, 800);
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

    saveOptions() {
      this.activateButton();
      store.commit('setForYear', this.forYear);
      store.commit('setFromYear', this.fromYear);
      store.commit('setIsMasters', this.isMasters);

      this.emptyRelayTeams();

      if (this.fromYearChanged) {
        store.dispatch('updateAllWithTimes');
      }
    }

    emptyRelayTeams() {
      store.commit('calculate/emptyRelayTeams');
    }
}
