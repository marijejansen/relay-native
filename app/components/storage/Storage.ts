import { StorageData } from "@/models/StorageData";
import { Vue, Component } from "vue-property-decorator";
import StorageItem from "./StorageItem";

import './Storage.scss';
import { Swimmer } from "@/models/Swimmer";
import store from '@/store/index';


@Component({ components: { StorageItem } })
export default class Storage extends Vue {

    private description: string = "";

    private tapped: boolean = false;

    mounted() {
        store.dispatch('getFromStorage');
    }

    currentSelection(): Swimmer[] {
        return store.getters.getAllSelected;
    }

    get numberSelected(): number {
        return this.currentSelection().length;
    }

    saveToStorage(){
        if (this.description == "" || this.numberSelected === 0){
            return;
        }
        this.tapped = true;
        setTimeout(() => { this.tapped = false }, 300);
        const storageData: StorageData = {
            numberOfSwimmers: this.numberSelected,
            date: new Date,
            description: this.description,
            swimmers: this.currentSelection(),
            id: Date.now()
        }
        store.dispatch('saveToStorage', storageData);
        store.dispatch('getFromStorage');
        this.description = "";
    }

    selection(): StorageData[] {
        var storageData: StorageData[] = store.getters.getStorageData;
        return storageData.filter(sd => sd.date !== null && sd.date !== undefined);
    }
}