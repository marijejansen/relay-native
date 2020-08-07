import { Component, Vue, Mixins } from "vue-property-decorator";
import RelayMixin from '@/mixins/RelayMixins';
import store from '@/store/index';
import { Course } from '@/models/Course';
import './Selector.scss';


@Component({})
export default class CourseSelector extends Mixins(RelayMixin){
    
    private course: number = store.getters['calculate/getCourse'];  

    courseLabel(): string{
        return this.getCourseString(Course[this.course]);
    }

    nextCourse() {
        var num = Object.keys(Course).length / 2;
        this.setCourse((this.course + num-1) % num);
    }

    setCourse(newNumber: number){
        this.course = newNumber;
        store.commit('calculate/setCourse', this.course);
    }

}