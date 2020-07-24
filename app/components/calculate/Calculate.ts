import { Component, Vue, Mixins } from "vue-property-decorator";
import './Calculate.scss'
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';
import TestMixin from '@/mixins/TestMixin';
import CalculateSelectionItem from '@/components/calculate/CalculateSelectionItem'
import { RelayStrings, Relay } from '@/models/relay';

@Component({ components: {CalculateSelectionItem} })
export default class Calculate extends Mixins(TestMixin){

    getTestData: Swimmer[] = this.getTestResults();

    private activeRelayNumber: number = 0;

    private relay: string = Relay[0];

    selection(): Swimmer[] {
        return this.getTestData;
        //return store.getters.getAllSelected;
    }

    relayLabel() {
        return RelayStrings.get((<any>Relay)[this.relay]);
      }

    nextRelay() {
        this.setRelay((this.activeRelayNumber + 1) % 5);
    }

    prevRelay() {
        this.setRelay(((this.activeRelayNumber + 4) % 5));
    }

    setRelay(newNumber: number){
        this.activeRelayNumber = newNumber;
        this.relay = Relay[newNumber];
    }
}
