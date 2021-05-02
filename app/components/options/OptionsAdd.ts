import { Component, Vue } from 'vue-property-decorator';
import translate from '@/locales/i18n';
import Selector from '@/components/selectors/Selector';
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';

@Component({ components: { Selector } })
export default class OptionsAdd extends Vue {
    private showAddDetails = false;

    private showSwimmerAdded = false;

    private buttonIsClicked = false;

    private checkValues = false;

    private firstName = '';

    private lastName = '';

    private clubName = '';

    private birthYear: number = null;

    private genderIndex = 0;

    toggleAddDetails() {
      this.showAddDetails = !this.showAddDetails;
    }

    get genders(): string[] {
      const items: string[] = [translate.t('options.addSwimmer.gender.female').toString(), translate.t('options.addSwimmer.gender.male').toString()];
      return items;
    }

    setGender(gender: number) {
      this.genderIndex = gender;
    }

    get validYear() {
      if (this.checkValues) {
        const year = this.birthYear;
        const thisYear = (new Date()).getFullYear();
        if (year != null) {
          if (!Number.isInteger(parseInt(year.toString())) || year < 1900 || year > thisYear) {
            return false;
          }
        }
      }
      return true;
    }

    async addSwimmer() {
      this.checkValues = true;
      if (this.canAddSwimmer) {
        this.activateButton();

        const swimmer = this.getSwimmerModel();
        await setTimeout(() => {
          store.commit('addToSelectedSwimmers', swimmer);
          store.dispatch('saveToStorage');
          this.closeAddAndShowSwimmerAdded();
          this.clearFields();
        }, 800);
      }
    }

    getSwimmerModel(): Swimmer {
      return {
        id: this.getNextCustomId(),
        firstName: this.firstName,
        lastName: this.lastName,
        clubName: this.clubName,
        position: null,
        birthYear: Number(this.birthYear),
        gender: this.genderIndex,
        shortCourseTimes: null,
        longCourseTimes: null,
        time: null,
        isCustom: true
      };
    }

    clearFields() {
      this.firstName = '';
      this.lastName = '';
      this.clubName = '';
      this.birthYear = null;
      this.genderIndex = 0;
    }

    get canAddSwimmer(): boolean {
      if (!this.firstName || !this.lastName || !this.birthYear || !this.validYear) {
        return false;
      }
      return true;
    }

    activateButton() {
      this.buttonIsClicked = true;
      setTimeout(() => { this.buttonIsClicked = false; }, 800);
    }

    closeAddAndShowSwimmerAdded() {
      this.showAddDetails = false;
      this.showSwimmerAdded = true;
      setTimeout(() => { this.showSwimmerAdded = false; }, 2000);
    }

    getNextCustomId() {
      const swimmers: Swimmer[] = store.getters.getAllSelected;
      const customIds = swimmers.map(p => p.id).filter(id => id > 999999900).sort();
      let lowest = -1;
      for (let i = 0; i < customIds.length; i++) {
        if (customIds[i] !== 999999901 + i) {
          lowest = i;
          break;
        }
      }
      if (lowest === -1) {
        lowest = customIds.length;
      }

      return lowest + 999999901;
    }
}
