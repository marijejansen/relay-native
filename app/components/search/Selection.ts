import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';

@Component
export default class Selection extends Vue {

    selection(): Swimmer[] {
        return store.getters.getAllSelected;
    }

    //verder
    remove(id: number) {
        console.log("TEST: remove");
        store.commit("removeFromSelectedSwimmers", id);
        // this.removed = id;
        // setTimeout(() => { 
        //   store.commit("removeFromSelectedSwimmers", id);
        //   this.removed = 0;
        // }, 10000);
    }

}