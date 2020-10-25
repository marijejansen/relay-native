import { Component, Vue } from "vue-property-decorator";
import translate from '@/locales/i18n'
import { Gender } from '@/models/gender';
import Selector from '@/components/selectors/Selector';

@Component({ components: {Selector} })
export default class OptionsAdd extends Vue {
    private showAddDetails: boolean = false;

    private addSwimmerGender: Gender = Gender.Female;

    toggleAddDetails() {
        this.showAddDetails = !this.showAddDetails;
    }

    get genders(): string[] {
        var items: string[] = [translate.t('options.addSwimmer.gender.female').toString(), translate.t('options.addSwimmer.gender.male').toString()];
        return items;
    }
}