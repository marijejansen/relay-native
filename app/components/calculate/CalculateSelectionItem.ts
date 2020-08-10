import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import './Calculate.scss'

@Component({ components: {} })
export default class CalculateSelectionItem extends Vue {

    @Prop()
    private selectionItem!: Swimmer;

    @Prop()
    private selected: boolean;

    @Emit('setActive')
    setActive(active: boolean) { }

    get isActive(): boolean {
        return this.selected;
    }

    getAge() {
        var thisYear = (new Date()).getFullYear();
        return thisYear - this.selectionItem.birthYear;
    }

    toggleActive() {
        this.setActive(!this.selected);
    }
}