import { Component, Mixins } from "vue-property-decorator";
import RelayMixin from '@/mixins/RelayMixins';
import store from '@/store/index';
import { Relay } from '@/models/relay';
import './Selector.scss';


@Component({})
export default class RelaySelector extends Mixins(RelayMixin){
    
    private relay: number = store.getters['calculate/getRelay'];

    private numberOfElements = Object.keys(Relay).length / 2;

    relayLabel() {
        return this.getRelayString(Relay[this.relay])
      }

    nextRelay() {
        var num = this.numberOfElements;
        this.setRelay((this.relay + 1) % num);
    }

    prevRelay() {
        var num = this.numberOfElements;
        this.setRelay(((this.relay + num-1) % num));
    }

    setRelay(newNumber: number){
        this.relay = newNumber;
        store.commit('calculate/setRelay', this.relay);
    }
}