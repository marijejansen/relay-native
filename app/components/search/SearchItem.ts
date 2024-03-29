import { Component, Vue, Prop } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';

@Component({ components: {} })
export default class SearchItem extends Vue {

    clicked: boolean = false;

    @Prop()
    searchResult: Swimmer;

    select() {
        this.setClicked();
        store.commit("addToSelectedSwimmers", this.searchResult);
        store.commit("calculate/addToSelectedForCalculation", this.searchResult.id);
        store.dispatch('saveCurrentStateToStorage');
        this.updateWithTimes(this.searchResult.id);
    }

    setClicked() {
        this.clicked = true;
        setTimeout(() => { this.clicked = false }, 300);
      }

    async updateWithTimes(id: number) {
        store.dispatch('updateWithTimes', id);
        store.dispatch('saveCurrentStateToStorage');
    }
}