import { Component, Mixins } from "vue-property-decorator";
import './Options.scss'
import store from '@/store/index';
import translate from '@/locales/i18n'
import Selector from '@/components/selectors/Selector';
import { Relay } from "@/models/relay";
import RelayMixin from "@/mixins/RelayMixins";
import RelayOption from "./RelayOption";

@Component({ components: { Selector, RelayOption } })
export default class Options extends Mixins(RelayMixin) {

    private isMasters: number;

    private forYear: number;

    private fromYear: number;

    private changed: boolean = false;

    private fromYearChanged: boolean = false;

    private buttonIsClicked: boolean = false;

    private activeRelays: Relay[];

    private allRelays: Relay[] = this.getAllRelays();

    beforeCreate(): void {
        this.activeRelays = store.getters["getVisibleRelays"];
        this.isMasters = Number(store.getters['isMasters']);
        this.forYear = Number(store.getters['getForYear']);
        this.fromYear = Number(store.getters['getFromYear']);
    }

    get yearIndex(): number {
        var years = this.getForYearItems;
        var year = this.forYear.toString();
        var index = years.findIndex(y => y === year);
        return index;
    }

    get fromYearIndex(): number {
        var years = this.getFromYearItems;
        var year = this.fromYear.toString();
        var index = years.findIndex(y => y === year);
        return index;
    }

    get isMastersItems(): string[] {
        var items: string[] = [translate.t('options.ageGroups.allin').toString(), translate.t('options.ageGroups.masters').toString()];
        return items;
    }

    get getForYearItems(): string[] {
        var thisYear = (new Date()).getFullYear();
        var years: string[] = [];
        for (var i = 0; i < 4; i++) {
            years.push((thisYear + i).toString())
        }

        return years;
    }

    get getFromYearItems(): string[] {
        var thisYear = (new Date()).getFullYear();
        var years: string[] = [];
        for (var i = 0; i < 4; i++) {
            years.push((thisYear - i).toString())
        }

        return years.sort();
    }

    get optionsChanged(): boolean {
        return this.changed;
    }

    rowsForRelays(): string {
        var rows = '*' + ', *'.repeat((Object.keys(this.allRelays).length - 1) / 2);
        return rows;
    }

    relayIsActive(key: number): boolean {
        var active = this.activeRelays;
        return active?.find(v => v == key) !== undefined;
    }

    getAllRelays(): Relay[] {
        var relayKeys = Object.keys(Relay);
        return relayKeys.filter(k => isNaN(Number(k))).map(n => Relay[n]);
    }

    toggleRelay(index: number): void {
        var relay = Relay[Relay[index]];
        if (this.activeRelays.findIndex(r => r === index) === -1) {
            this.activeRelays.push(relay);
        } else {
            this.activeRelays = this.activeRelays.filter(r => r !== index);
        }
        this.changed = true;
    }

    activateButton(): void {
        this.buttonIsClicked = true;
        setTimeout(() => { this.buttonIsClicked = false, this.changed = false }, 800);
    }

    setForYear(yearIndex: number): void {
        this.forYear = Number(this.getForYearItems[yearIndex]);
        this.changed = true;
    }

    setFromYear(yearIndex: number): void {
        this.fromYear = Number(this.getFromYearItems[yearIndex]);
        this.changed = true;
        this.fromYearChanged = true;
    }

    setIsMasters(isMasters: number): void {
        this.isMasters = isMasters;
        this.changed = true;
    }

    saveOptions(): void {
        this.activateButton();
        store.commit('setForYear', this.forYear);
        store.commit('setFromYear', this.fromYear);
        store.commit('setIsMasters', this.isMasters);
        store.commit('setVisibleRelays', this.activeRelays);

        this.emptyRelayTeams();

        if (this.fromYearChanged) {
            store.dispatch('updateAllWithTimes');
        }
    }

    emptyRelayTeams(): void {
        store.commit("calculate/emptyRelayTeams");
    }
}