import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import './Calculate.scss'
import store from '@/store/index';

@Component({ components: {} })
export default class CalculateSelectionItem extends Vue {

    private active: boolean = false;

    @Prop()
    private selectionItem!: Swimmer;
    
    get isActive(): boolean {
        return this.active;
    }

    set isActive(value: boolean) {
        this.active = value;
    }

    @Emit('setActive')
    setActive(active: boolean) { }

    getAge() {
        var thisYear = (new Date()).getFullYear();
        return thisYear - this.selectionItem.birthYear;
    }

    toggleActive() {
        this.isActive = !this.isActive;
        this.setActive(this.isActive);
    }

    created() {
        this.isActive = true;
        this.setActive(true);
    }
}