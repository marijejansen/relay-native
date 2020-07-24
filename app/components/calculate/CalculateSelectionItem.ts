import { Component, Vue, Prop } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import './Calculate.scss'

@Component({ components: {} })
export default class CalculateSelectionItem extends Vue {

    private isActive = false;

    @Prop()
    private selectionItem!: Swimmer;

    getAge() {
        var thisYear = (new Date()).getFullYear();
        return thisYear - this.selectionItem.birthYear;
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }
}