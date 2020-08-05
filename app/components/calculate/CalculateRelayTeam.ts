import { Component, Vue, Prop} from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import './Calculate.scss'
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';
import store from '@/store/index';

@Component({ components: {} })
export default class CalculateRelayTeam extends Vue {

    @Prop()
    private team!: IRelayTeam;

    get teamSwimmers(): Swimmer[]{
        console.log("team age: ");
        console.log(this.team);
        return this.team.swimmers;
    }

}