import RelayMixin from "@/mixins/RelayMixins";
import { Relay } from "@/models/relay";
import { Component, Emit, Mixins, Prop } from "vue-property-decorator";
import store from '@/store/index';

@Component({ components: {} })
export default class RelayOption extends Mixins(RelayMixin) {
    @Prop()
    private relay!: Relay;

    @Prop()
    private active!: boolean;

    @Emit('toggleRelay')
    toggleRelay(relay: Relay) {
    }

    private activeRelay: boolean = this.active;

    get relayIsActive(): boolean { 
        return this.activeRelay 
    };

    getAllRelays(): Relay[] {
        var relayKeys = Object.keys(Relay);
        return relayKeys.filter(k => isNaN(Number(k))).map(n => Relay[n]);
    }

    get relayString(): string {
        return this.getRelayString(Relay[this.relay])
    }

    toggle() {
        this.activeRelay = !this.activeRelay;
        console.log(this.activeRelay);
        this.toggleRelay(this.relay);
    }
}