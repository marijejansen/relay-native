import { Component, Prop, Mixins, Emit } from 'vue-property-decorator';
import { Swimmer } from '@/models/Swimmer';
import TimeFormatMixin from '@/mixins/TimeFormatMixin';
import StrokeMixin from '@/mixins/StrokeMixin';
import SingleTime from './SingleTime';
import { ICourseTimes } from '@/models/interfaces/ICourseTimes';
import { CourseTimes } from '@/models/CourseTimes';
import { Course } from '@/models/Course';
import store from '@/store/index';

@Component({ components: { SingleTime } })
export default class TimesItem extends Mixins(TimeFormatMixin, StrokeMixin) {
    @Prop()
    private item!: Swimmer;

    get course(): Course { return store.getters['calculate/getCourse']; }

    showDetails: boolean;

    showEdit: boolean;

    loadedTimes: number[] = store.getters['search/timesLoaded'];

    @Emit('toggleShow')
    toggleShow(show: boolean, id: number): void {}

    timeString(seconds: number) : string {
      return this.toTimeString(seconds);
    }

    colsOrRowsForTimes(wat: string) : string {
      const x = '*' + ', *'.repeat(Object.keys(this.times).length - 1);
      return x;
    }

    get times(): ICourseTimes {
      const times = this.course === Course.ShortCourse ? this.item.shortCourseTimes : this.item.longCourseTimes;
      return times ?? new CourseTimes();
    }

    getIndex(key: keyof ICourseTimes) : number {
      return this.getStrokeIndex(key);
    }

    strokeNameLong(stroke: keyof ICourseTimes) : string {
      return this.getStrokeNameLong(stroke);
    }

    get timesLoaded() : boolean {
      return this.loadedTimes.find(lt => lt === this.item.id) > 0;
    }

    toggleDetails() : void {
      if (!this.showEdit) {
        this.showDetails = !this.showDetails;
        this.toggleShow(this.showDetails, this.item.id);
      }
    }

    toggleEdit() : void {
      this.showEdit = !this.showEdit;
    }

    onSave(): void {
      this.showEdit = false;
      this.toggleDetails();
    }

    saveTime(index: number, time: number) : void {
      const swimmer = this.item;
      const times = this.times;

      const key = this.getCourseKeyByIndex(index);
      times[key] = time;

      if (this.course === Course.LongCourse) {
        swimmer.longCourseTimes = times;
      } else {
        swimmer.shortCourseTimes = times;
      }

      store.commit('addToSelectedSwimmers', swimmer);
    }

    private getCourseKeyByIndex(index: number): keyof ICourseTimes {
      const courseKeys = Object.keys(this.times);
      return courseKeys[index] as keyof ICourseTimes;
    }
}
