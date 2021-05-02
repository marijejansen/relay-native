import { Component, Vue, Prop } from 'vue-property-decorator';
import { Swimmer } from '@/models/Swimmer';
import './Calculate.scss';
import store from '@/store/index';

@Component({ components: {} })
export default class CalculateSelectionItem extends Vue {
    @Prop()
    private selectionItem!: Swimmer;

    get selected(): number[] {
      const x = store.getters['calculate/getSelectedForCalculation'];
      console.log(x);
      return x;
    }

    get isActive(): boolean {
      return this.selected.filter(s => s === this.selectionItem.id).length > 0;
    }

    getAge(): number {
      const thisYear = (new Date()).getFullYear();
      return thisYear - this.selectionItem.birthYear;
    }

    toggleActive(): void {
      const active = !this.isActive;
      if (active) {
        store.commit('calculate/addToSelectedForCalculation', this.selectionItem.id);
      } else {
        store.commit('calculate/removeFromSelectedForCalculation', this.selectionItem.id);
      }
    }
}
