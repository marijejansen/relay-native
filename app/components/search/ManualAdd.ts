import { Component, Vue } from "vue-property-decorator";
import translate from '@/locales/i18n'
import Selector from '@/components/selectors/Selector';
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';

@Component({ components: { Selector } })
export default class ManualAdd extends Vue {
    private showAddDetails: boolean = false;

    private showSwimmerAdded: boolean = false;

    private buttonIsClicked: boolean = false;

    private checkValues: boolean = false;

    private firstName: string = "";

    private lastName: string = "";

    private clubName: string = "";

    private birthYear: number = null;

    private genderIndex: number = 0;

    toggleAddDetails(): void {
        this.showAddDetails = !this.showAddDetails;
    }

    get genders(): string[] {
        var items: string[] = [translate.t('options.addSwimmer.gender.female').toString(), translate.t('options.addSwimmer.gender.male').toString()];
        return items;
    }

    setGender(gender: number): void {
        this.genderIndex = gender;
    }

    get validYear(): boolean {
        if (this.checkValues) {
            var year = this.birthYear;
            var thisYear = (new Date()).getFullYear();
            if (year != null) {
                if (!Number.isInteger(parseInt(year.toString())) || year < 1900 || year > thisYear) {
                    return false;
                }
            }
        }
        return true;
    }

    async addSwimmer(): Promise<void> {
      this.checkValues = true;
      if (this.canAddSwimmer) {
        this.activateButton();

        const swimmer = this.getSwimmerModel();
        await setTimeout(() => {
          store.commit('addToSelectedSwimmers', swimmer);
          store.commit('calculate/addToSelectedForCalculation', swimmer.id);

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
        }
    }

    clearFields() {
        this.firstName = "";
        this.lastName = "";
        this.clubName = "";
        this.birthYear = null;
        this.genderIndex = 0;
    }

    get canAddSwimmer(): boolean {
        if (!this.firstName || !this.lastName || !this.birthYear || !this.validYear) {
            return false;
        }
        return true;
    }

    activateButton(): void {
        this.buttonIsClicked = true;
        setTimeout(() => { this.buttonIsClicked = false }, 800);
    }

    closeAddAndShowSwimmerAdded(): void {
        this.showAddDetails = false;
        this.showSwimmerAdded = true;
        setTimeout(() => { this.showSwimmerAdded = false }, 2000);
    }

    getNextCustomId(): number {
        var swimmers: Swimmer[] = store.getters.getAllSelected;
        var customIds = swimmers.map(p => p.id).filter(id => id > 999999900).sort();
        var lowest = -1;
        for (var i = 0; i < customIds.length; i++) {
            if (customIds[i] != 999999901 + i) {
                lowest = i;
                break
            }
        }
        if (lowest = -1) {
            lowest = customIds.length
        }

        return lowest + 999999901;
    }
}