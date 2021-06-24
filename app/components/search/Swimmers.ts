import { Component, Vue } from "vue-property-decorator";
import Search from './Search';
import store from '@/store/index';
import Selector from '../selectors/Selector';
import ManualAdd from './ManualAdd';
import Selection from "./Selection";
import translate from '@/locales/i18n'

import "./Search.scss"

@Component({ components: {Search, Selector, ManualAdd, Selection} })
export default class Swimmers extends Vue {

    private selectedPage: number = 0;

    hasSelection(): boolean {
        return store.getters.getAllSelected.length > 0;
    }

    get pageSelectionItems(): string[] {
        return [translate.t('search.pageoption.search').toString(), translate.t('search.pageoption.manual').toString()]
    }

    setPage(pageNumber: number){
        this.selectedPage = pageNumber;
    }

    get showSearch(): boolean {
        return this.selectedPage == 0;
    }

    get showManual(): boolean {
        return this.selectedPage == 1;
    }
}