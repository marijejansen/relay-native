import { Component, Vue, Prop, Mixins, Emit } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import TimeFormatMixin from '@/mixins/TimeFormatMixin'
import StrokeMixin from '@/mixins/StrokeMixin'
import SingleTime from './SingleTime';
import { ICourseTimes } from '@/models/interfaces/ICourseTimes';
import { CourseTimes } from '@/models/CourseTimes';
import { Course } from '@/models/Course';
import store from '@/store/index';

@Component({ components: { SingleTime } })
export default class TimesItem extends Mixins(TimeFormatMixin, StrokeMixin) {

    course: Course = Course.ShortCourse;

    showDetails: boolean = false;

    showEdit: boolean = false;

    loadedTimes: Number[] = store.getters['search/timesLoaded'];

    @Prop()
    private item!: Swimmer;

    @Emit('toggleShow')
    toggleShow(show: boolean, id: number) {
    }

    timeString(seconds: number) {
        return this.toTimeString(seconds);
    }

    colsOrRowsForTimes(wat: string) {
        var x = '*' + ', *'.repeat(Object.keys(this.times).length - 1);
        return x;
    }

    get times(): ICourseTimes {
        var times =  this.course === Course.ShortCourse ? this.item.shortCourseTimes : this.item.longCourseTimes;
        return times ?? new CourseTimes();
    }

    getIndex(key: keyof ICourseTimes) : number {
        return this.getStrokeIndex(key);
    }

    strokeNameLong(stroke: keyof ICourseTimes) {
        return this.getStrokeNameLong(stroke);
    }

    get timesLoaded() {
        return this.loadedTimes.find(lt => lt === this.item.id) > 0;
    }

    toggleDetails() {
        if(!this.showEdit){
            this.showDetails = !this.showDetails;
            this.toggleShow(this.showDetails, this.item.id);
        }
    }

    toggleEdit() {
        this.showEdit = !this.showEdit;
    }

    onSave() {
        this.showEdit = false;
        this.toggleDetails;
    }

    saveTime(index: number, time: number) {
        var swimmer = this.item;
        var times = this.times;

        var key = this.getCourseKeyByIndex(index);
        times[key] = time;

        if(this.course === Course.LongCourse){
            swimmer.longCourseTimes = times;
        } else {
            swimmer.shortCourseTimes = times;
        }

        store.commit("addToSelectedSwimmers", swimmer);
    }

    private getCourseKeyByIndex(index: number): keyof ICourseTimes{
        var courseKeys = Object.keys(this.times);
        return courseKeys[index] as keyof ICourseTimes;
    }
}