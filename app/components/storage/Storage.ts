import { StorageData } from "@/models/StorageData";
import { Vue, Component } from "vue-property-decorator";
import StorageItem from "./StorageItem";

import './Storage.scss';

@Component({ components: {StorageItem} })
export default class Storage extends Vue {

    private description: string;
    private idSelected: number;

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
}