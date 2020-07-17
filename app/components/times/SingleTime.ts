import { Component, Mixins, Prop } from 'vue-property-decorator';
import TimeFormatMixin from '@/mixins/TimeFormatMixin';

@Component({ components: {} })
export default class SingleTime extends Mixins(TimeFormatMixin) {

    @Prop()
    private _time: number;

    private inputVisible = false;

    private displayTime: string;

    get editTime() {
        console.log("get time: " + this.displayTime)
        return this.displayTime;
    }

    time() {
        return this.toTimeString(this._time);
    }

    set editTime(timeString: string) {
        this.displayTime = timeString;
    }

    setTime() {
        var seconds = this.toSeconds(this.displayTime);
        if (seconds != NaN) {
            this._time = seconds;
        } else {
            this.displayTime = this.toTimeString(this._time);
        }
        this.inputVisible = false;
    }

    created() {
        this.displayTime = this.toTimeString(this._time)
    }

    showInput() {
        this.inputVisible = true;
    }
}