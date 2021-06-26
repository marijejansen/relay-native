import { StorageData } from "@/models/StorageData";
import { Vue, Component, Prop } from "vue-property-decorator";
import translate from '@/locales/i18n'

import './Storage.scss';

@Component({ components: {} })
export default class StorageItem extends Vue {
    
    @Prop()
    private item!: StorageData;

    private selected: boolean = false;

    loadTapped() {
        this.selected = !this.selected;
    }

    get buttonText(): string {
        return translate.t('storage.getdata').toString()
    }

    getData(): void {

    }

    getDateString(date: Date): string {
        var month = date.getMonth();
        var day = date.getDay();        
        var hour = date.getHours();
        var minutes = date.getMinutes();
        return `${day}/${month} ${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}`;
    }
}