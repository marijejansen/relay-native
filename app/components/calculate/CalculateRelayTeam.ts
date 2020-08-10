import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import './Calculate.scss'
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';
import store from '@/store/index';
import RelayMixin from '@/mixins/RelayMixins';
import TimeFormatMixin from '@/mixins/TimeFormatMixin';

@Component({ components: {} })
export default class CalculateRelayTeam extends Mixins(RelayMixin, TimeFormatMixin) {

    @Prop()
    private team!: IRelayTeam;

    private showDetails: boolean = false;

    get teamSwimmers(): Swimmer[] {
        return this.team.swimmers;
    }

    genderShort() {
        var gender = this.team.gender;
        return this.getGenderStringShort(gender).toUpperCase();
    }

    get teamTime() {
        return this.toTimeString(this.team.time);
    }

    stringTime(seconds: number){
        return this.toTimeString(seconds);
    }

    getAgeText(){
        return this.showDetails ? this.team.age : this.team.ageGroup + this.genderShort()
    }

    toggleDetails() {
        this.showDetails = !this.showDetails;
    }

}