import { Component, Vue, Prop } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';
// import { namespace } from 'vuex-class';
// const search = namespace('search');

@Component
export default class SelectionItem extends Vue {
    
    private removed: boolean = false;

    loadedTimes: Number[] = store.getters['search/timesLoaded'];

    get timesLoaded() {
        return this.loadedTimes.find(lt => lt === this.item.id) > 0;
        
    }

    @Prop()
    private selectionItem!: Swimmer;

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
            store.commit('calculate/removeFromSelectedForCalculation', this.item.id)
        }, 200);
    }
    
}