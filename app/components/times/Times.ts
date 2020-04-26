import { Component, Mixins } from "vue-property-decorator";
// import './Times.scss'
import TestMixin from '@/mixins/TestMixin'
import { Swimmer } from '@/models/Swimmer';
import TimesItem from './TimesItem';


@Component({ components: { TimesItem } })
export default class Times extends Mixins(TestMixin) {

    showTop = false;

    detailsShown: number[] = [];

    getTestData: Swimmer[] = this.getTestResults();

    items() {
        const data = this.getTestData;
        return data;
    }

    private onToggleShow(show: boolean, id: number) {
        if (show) {
            if (this.detailsShown.find(i => i === id) == null) {
                var newShow = this.detailsShown;
                newShow.push(id);
                this.detailsShown = newShow;
            }
        } else {
            this.detailsShown = this.detailsShown.filter(i => i !== id);
        }
        this.setShowTop();
    }

    setShowTop() {
        if (this.detailsShown.length > 0) {
            this.showTop = true;
        } else {
            this.showTop = false;
        }
    }
}