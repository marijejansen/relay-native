import { Component, Vue, Prop } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';

@Component
export default class SelectionItem extends Vue {
    
    private removed: boolean = false;

    @Prop()
    private selectionItem!: Swimmer;

    get item(){
        return this.selectionItem;
    }

    get isRemoved(){
        console.log("TEST: removed??")
        return this.removed;
    }

    remove() {
        console.log("TEST: remove");
        this.removed = true;
        setTimeout(() => { 
            store.commit("removeFromSelectedSwimmers", this.item.id);
        }, 600);
        // store.commit("removeFromSelectedSwimmers", this.item.id);
    }
    
}