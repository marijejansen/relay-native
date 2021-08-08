import { StorageData } from "@/models/StorageData";
import { Vue, Component, Prop } from "vue-property-decorator";
import translate from '@/locales/i18n'
import store from '@/store/index';

import './Storage.scss';
import { ICourseTimes } from "@/models/interfaces/ICourseTimes";

@Component({ components: {} })
export default class StorageItem extends Vue {
    
    @Prop()
    private item!: StorageData;

    private selected: boolean = false;

    private getTapped: boolean = false;

    private deleteTapped: boolean = false;

    loadTapped() {
        this.selected = !this.selected;
    }

    get buttonText(): string {
        return translate.t('storage.getdata').toString()
    }

    get buttonTextDelete(): string {
        return translate.t('storage.deletedata').toString()
    }

    getData(): void {
        this.getTapped = true;
        setTimeout(() => { this.getTapped = false }, 300);
        this.item.swimmers.forEach(s => {
            store.commit("addToSelectedSwimmers", s);
            store.commit("calculate/addToSelectedForCalculation", s.id);
            if(this.getHasTimes(s.shortCourseTimes) || this.getHasTimes(s.longCourseTimes)){
                store.commit("search/setTimesLoaded", s.id);
            }
        })
    }

    deleteData(): void {
        this.deleteTapped = true;
        setTimeout(() => { 
            this.deleteTapped = false 
            store.dispatch('deleteInStorage', this.item.id);
            store.dispatch('getFromStorage');       
        }, 300);
    }

    getDateString(date: Date): string {
        date = new Date(date);
        var month = date.getMonth() + 1;
        var day = date.getDate();       
        var hour = date.getHours();
        var minutes = date.getMinutes();
        return `${day}/${month} ${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}`;
    }

    getHasTimes(times: ICourseTimes): boolean {
        var hasTimes: boolean = false;
        Object.values(times).forEach(val => {
          if(val !== 0){
            hasTimes = true;
          }
        });
        return hasTimes;
      }
}