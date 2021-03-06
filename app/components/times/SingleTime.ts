import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';
import TimeFormatMixin from '@/mixins/TimeFormatMixin';
import { GridLayout } from 'tns-core-modules/ui/layouts';
import { TextField } from 'tns-core-modules/ui/text-field';
import * as utils from "tns-core-modules/utils/utils";
import { isAndroid } from "tns-core-modules/platform"


@Component({ components: {} })
export default class SingleTime extends Mixins(TimeFormatMixin) {

    @Prop()
    private timeSeconds: number;

    @Prop()
    private index: number;

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

    focusEdit(args) {
        var gridLayout = <GridLayout>args.object;
        var edit = <TextField>gridLayout.getViewById("edit-time_" + this.index);

        // ugly fix to ensure element gets focus
        if (isAndroid) {
            setTimeout(() => {
                edit.focus();
            }, 1);
        }
    }
}