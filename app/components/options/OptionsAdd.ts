import { Component, Vue } from "vue-property-decorator";
import translate from '@/locales/i18n'
import Selector from '@/components/selectors/Selector';
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';

@Component({ components: { Selector } })
export default class OptionsAdd extends Vue {
    private showAddDetails: boolean = false;

    private showSwimmerAdded: boolean = false;

    private buttonIsClicked: boolean = false;

    private checkValues: boolean = false;

    private swimmer: Swimmer = {
        id: null,
        firstName: "",
        lastName: "",
        clubName: "",
        position: null,
        birthYear: null,
        gender: 0,
        shortCourseTimes: null,
        longCourseTimes: null,
        time: null,
        isCustom: true
    };

    toggleAddDetails() {
        this.showAddDetails = !this.showAddDetails;
    }

    get genders(): string[] {
        var items: string[] = [translate.t('options.addSwimmer.gender.female').toString(), translate.t('options.addSwimmer.gender.male').toString()];
        return items;
    }

    get validYear(){
        if(this.checkValues){
            var year = this.swimmer.birthYear;
            var thisYear = (new Date()).getFullYear();
            if(year != null) {
                if(!Number.isInteger(parseInt(year.toString())) || year < 1900 || year > thisYear){
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
            setTimeout(() => {
                this.swimmer.id = this.getNextCustomId();
                store.commit("addToSelectedSwimmers", this.swimmer);
                this.closeAddAndShowSwimmerAdded();
            }, 800);
        }
    }

    get canAddSwimmer(): boolean {
        if (!this.swimmer.firstName || !this.swimmer.lastName || !this.swimmer.birthYear || !this.validYear) {
            return false;
        }
        return true;
    }

    activateButton() {
        this.buttonIsClicked = true;
        setTimeout(() => { this.buttonIsClicked = false }, 800);
    }

    closeAddAndShowSwimmerAdded() {
        this.showAddDetails = false;
        this.showSwimmerAdded = true;
        setTimeout(() => { this.showSwimmerAdded = false }, 2000);
    }

    getNextCustomId() {
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