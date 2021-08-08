import StrokeMixin from "@/mixins/StrokeMixin";
import TimeFormatMixin from "@/mixins/TimeFormatMixin";
import { ICourseTimes } from "@/models/interfaces/ICourseTimes";
import { Swimmer } from "@/models/Swimmer";
import { Component, Prop, Mixins, Emit } from "vue-property-decorator";
import SingleTime from './SingleTime';

@Component({ components: { SingleTime } })
export default class EditTimes extends Mixins(TimeFormatMixin, StrokeMixin) {
    
    @Prop()
    private swimmerId: string;

    @Prop()
    private courseTimes: ICourseTimes;
    
    @Prop()
    private isShortCourse: boolean;

    @Emit('saveTime')
    save(index: number, time: number) {
    }

    getIndex(key: keyof ICourseTimes) : number {
        return this.getStrokeIndex(key);
    }

    colsOrRowsForTimes(wat: string) {
        var x = '*' + ', *'.repeat(Object.keys(this.courseTimes).length - 1);
        return x;
    }

    strokeNameLong(stroke: keyof ICourseTimes) {
        return this.getStrokeNameLong(stroke);
    }

    singleTimeId(index: number){
        var course = this.isShortCourse ? "sc" : "lc";
        return "single_" + this.swimmerId + '' + index + course; 
    }

    saveTime(index: number, time: number) {
        this.save(index, time);
    }
}