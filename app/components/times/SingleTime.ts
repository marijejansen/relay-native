import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';
import TimeFormatMixin from '@/mixins/TimeFormatMixin';
import { GridLayout } from 'tns-core-modules/ui/layouts';
import { TextField } from 'tns-core-modules/ui/text-field';
import * as utils from 'tns-core-modules/utils/utils';
import { isAndroid } from 'tns-core-modules/platform';

@Component({ components: {} })
export default class SingleTime extends Mixins(TimeFormatMixin) {
    @Prop()
    private timeSeconds: number;

    @Prop()
    private index: number;

    private inputVisible = false;

    private displayTime: string;

    @Emit('saveTime')
    saveTime(time: number) {}

    get editTime() : string {
      return this.displayTime;
    }

    set editTime(timeString: string) {
      this.displayTime = timeString;
    }

    time() : string {
      return this.toTimeString(this.timeSeconds);
    }

    setTime(): void {
      const seconds = this.toSeconds(this.displayTime);
      if (isNaN(seconds)) {
        this.saveTime(seconds);
      } else {
        this.displayTime = this.toTimeString(seconds);
      }
      this.inputVisible = false;
    }

    created(): void {
      this.displayTime = this.toTimeString(this.timeSeconds);
    }

    setInputVisible(): void {
      this.inputVisible = true;
    }

    focusEdit(args) {
      const gridLayout = <GridLayout>args.object;
      const edit = <TextField>gridLayout.getViewById('edit-time_' + this.index);

      // ugly fix to ensure element gets focus
      if (isAndroid) {
        setTimeout(() => {
          edit.focus();
        }, 1);
      }
    }
}
