import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';
import TimeFormatMixin from '@/mixins/TimeFormatMixin';

@Component({ components: {} })
export default class SingleTime extends Mixins(TimeFormatMixin) {

    @Prop()
    private timeSeconds: number;

    private inputVisible = false;

    private displayTime: string;

    @Emit('saveTime')
    saveTime(time: number) { }

    get editTime() {
        return this.displayTime;
    }

    time() {
        return this.toTimeString(this.timeSeconds);
    }

    set editTime(timeString: string) {
        this.displayTime = timeString;
    }

    setTime() {
        var seconds = this.toSeconds(this.displayTime);
        if (seconds != NaN) {
            this.saveTime(seconds);
        } else {
            this.displayTime = this.toTimeString(seconds);
        }
        this.inputVisible = false;
    }

    created() {
        this.displayTime = this.toTimeString(this.timeSeconds)
    }

    setInputVisible() {
        this.inputVisible = true;
    }
}