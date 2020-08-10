import { Component, Mixins } from "vue-property-decorator";
import TestMixin from '@/mixins/TestMixin'
import { Swimmer } from '@/models/Swimmer';
import TimesItem from './TimesItem';
import store from '@/store/index';
import StrokeMixin from '@/mixins/StrokeMixin';
import CourseSelector from '../selectors/CourseSelector';

@Component({ components: { TimesItem, CourseSelector } })
export default class Times extends Mixins(TestMixin, StrokeMixin) {

    showTop = false;

    detailsShown: number[] = [];

    getTestData: Swimmer[] = this.getTestResults();

    selection(): Swimmer[] {
        //return store.getters.getAllSelected;
        return this.getTestData;
    }

    getStrokesSuperShort(): string[] {
        var namesShort = this.getStrokeNamesSuperShort();
        return namesShort;
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