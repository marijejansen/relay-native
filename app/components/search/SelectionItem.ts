import { Component, Vue, Prop } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';
import { namespace } from 'vuex-class';
const search = namespace('search');

@Component
export default class SelectionItem extends Vue {
    
    private removed: boolean = false;

    loadedTEST: Number[] = store.getters['search/timesLoaded'];

    get timesLoaded() {
        console.log(this.loadedTEST);
        return this.loadedTEST.find(lt => lt === this.item.id) > 0;
        
    }

    @Prop()
    private selectionItem!: Swimmer;

    get time(){
        if(this.selectionItem && this.selectionItem.shortCourseTimes){
            return this.selectionItem.shortCourseTimes.freestyle50M;
        }
    }

    get item(){
        return this.selectionItem;
    }

    get isRemoved(){
        return this.removed;
    }

    remove() {
        this.removed = true;
        setTimeout(() => { 
            store.commit("removeFromSelectedSwimmers", this.item.id);
        }, 200);
        // store.commit("removeFromSelectedSwimmers", this.item.id);
    }
    
}