import { Component, Vue, Prop, Mixins, Emit } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import TimeFormatMixin from '@/mixins/TimeFormatMixin'
import StrokeMixin from '@/mixins/StrokeMixin'
import { CourseTimes } from '@/models/coursetimes';
import { Course } from '@/models/Course';

@Component({components: {}})
export default class TimesItem extends Mixins(TimeFormatMixin, StrokeMixin) {

    course: Course.ShortCourse;

    showDetails: boolean = false;

    showEdit: boolean = false;

    @Prop()
    private item!: Swimmer;


    @Emit('toggleShow')
    toggleShow(show: boolean, id: number) {
    }

    timeString(seconds: number){
        return this.toTimeString(seconds);
    }

    colsOrRowsForTimes(wat: string){
        var x = '*' + ', *'.repeat(Object.keys(this.times).length - 1);
        return x;

    }

    get times(){
        return this.course === Course.ShortCourse ? this.item.shortCourseTimes : this.item.longCourseTimes;
    }

    strokeNameLong(stroke: keyof CourseTimes){
        return this.getStrokeNameLong(stroke);
    }

    toggleDetails(){
        this.showDetails = !this.showDetails;
        this.showEdit = false;
        this.toggleShow(this.showDetails, this.item.id);
    }
}