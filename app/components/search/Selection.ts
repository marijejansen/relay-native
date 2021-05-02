import { Component, Vue } from 'vue-property-decorator';
import { Swimmer } from '@/models/Swimmer';
import store from '@/store/index';
import SelectionItem from './SelectionItem';

@Component({ components: { SelectionItem } })
export default class Selection extends Vue {
    private hasSelection: boolean = this.selection?.length > 0;

    selection(): Swimmer[] {
      return store.getters.getAllSelected;
    }
}
