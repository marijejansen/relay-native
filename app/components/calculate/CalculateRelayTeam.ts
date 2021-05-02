import { Component, Vue, Prop, Mixins } from 'vue-property-decorator';
import { Swimmer } from '@/models/Swimmer';
import './Calculate.scss';
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';
import store from '@/store/index';
import RelayMixin from '@/mixins/RelayMixins';
import TimeFormatMixin from '@/mixins/TimeFormatMixin';

@Component({ components: {} })
export default class CalculateRelayTeam extends Mixins(RelayMixin, TimeFormatMixin) {
    @Prop()
    private team!: IRelayTeam;

    private isMasters: number = store.getters.isMasters;

    private showDetails = false;

    get teamSwimmers(): Swimmer[] {
      return this.team.swimmers;
    }

    genderShort() {
      const gender = this.team.gender;
      return this.getGenderStringShort(gender).toUpperCase();
    }

    get teamTime() {
      return this.toTimeString(this.team.time);
    }

    stringTime(seconds: number) {
      return this.toTimeString(seconds);
    }

    getAgeText() {
      const age = !this.isMasters ? '' : this.showDetails ? this.team.age : this.team.ageGroup;
      return age + this.genderShort();
    }

    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
}
