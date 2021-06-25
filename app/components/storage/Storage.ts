import { StorageData } from "@/models/StorageData";
import { Vue, Component } from "vue-property-decorator";

import './Storage.scss';

@Component({ components:{} })
export default class Storage extends Vue {
    
    selection(): StorageData[] {
        return [
            {
            date: new Date,
            numberOfSwimmers: 21,
            id: 1234,
            description: "dit is een test"
            },
            {
                date: new Date((new Date).setMonth(4)),
                numberOfSwimmers: 5,
                id: 1235,
                description: "veel"
                }
    ]
    }

    getDateString(date: Date): string {
        // var month = date.getMonth();
        // var day = date.getDay();        
        var month = 12;
        var day = 29;
        var hour = date.getHours();
        var minutes = date.getMinutes();
        return `${day}/${month} ${hour < 10 ? "0"+ hour : hour}:${minutes < 10 ? "0" + minutes : minutes}`;
    }
}