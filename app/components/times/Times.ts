import { Component, Mixins } from "vue-property-decorator";
import TestMixin from '@/mixins/TestMixin'
import { Swimmer } from '@/models/Swimmer';
import TimesItem from './TimesItem';
import store from '@/store/index';
import StrokeMixin from '@/mixins/StrokeMixin';
import Selector from '../selectors/Selector';
import RelayMixin from '@/mixins/RelayMixins';
import { Course } from '@/models/Course';

@Component({ components: { TimesItem, Selector } })
export default class Times extends Mixins(TestMixin, StrokeMixin, RelayMixin) {

    showTop = false;

    detailsShown: number[] = [];

    getTestData: Swimmer[] = this.getTestResults();

    private courseNumber: number = store.getters['calculate/getCourse']; 

    get courses(): string[] {
        var numberOfCourses = Object.keys(Course).length / 2;
        var courses: string[] = [];
        for (let i = 0; i < numberOfCourses; i++) {
            courses.push(this.getCourseString(Course[i]));
        }
        console.log(courses);
        return courses;
    }

    selection(): Swimmer[] {
        return store.getters.getAllSelected;
        //return this.getTestData;
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

    setCourse(courseNum: number){
        store.commit('calculate/setCourse', courseNum);
    }
}