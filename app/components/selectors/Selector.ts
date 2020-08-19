import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import './Selector.scss';


@Component({})
export default class RelaySelector extends Vue{
    
    @Prop()
    private activeNumber: number;

    @Prop()
    private items: string[];

    @Emit('changeItem')
    changeItem(time: number) { }

    private numberOfElements = this.items.length;

    get activeItem(): string {
        return this.items[this.activeNumber];
    }

    next() {
        var num = this.numberOfElements;
        this.setRelay((this.activeNumber + 1) % num);
    }

    previous() {
        var num = this.numberOfElements;
        this.setRelay(((this.activeNumber + num-1) % num));
    }

    setRelay(newNumber: number){
        this.activeNumber = newNumber;
        this.changeItem(this.activeNumber);
    }
}