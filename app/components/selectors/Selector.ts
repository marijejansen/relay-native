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

    private number: number = this.activeNumber;

    private numberOfElements = this.items.length;

    get activeItem(): string {
        return this.items[this.number];
    }

    next() {
        var num = this.numberOfElements;
        this.setItem((this.number + 1) % num);
    }

    previous() {
        var num = this.numberOfElements;
        this.setItem(((this.number + num-1) % num));
    }

    setItem(newNumber: number){
        this.number = newNumber;
        this.changeItem(this.number);
    }
}