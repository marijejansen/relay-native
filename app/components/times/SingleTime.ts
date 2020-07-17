import { Component, Mixins, Prop } from 'vue-property-decorator';
import TimeFormatMixin from '@/mixins/TimeFormatMixin';
import { TextField } from "tns-core-modules/ui/text-field";
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';

import * as utils from "tns-core-modules/utils/utils";

@Component({ components: { } })
export default class SingleTime extends Mixins(TimeFormatMixin) {

    @Prop()
    private _time: number;

    private displayTime: string;

    get time(){
        return this.toTimeString(this._time);
    }

    // set time(timeString: string){
    //     this.displayTime = timeString;
    // }

    // setTime({ object }){
    //     var seconds = this.toSeconds(this.displayTime);
    //     if(seconds != NaN){
    //         this._time = seconds;
    //     } else {
    //         this.displayTime = this.toTimeString(this._time);
    //         // object.blur();
    //     }
    // }

    showKeyboard({ object }){
        utils.ad.showSoftInput(object);
    }

    created(args){
        this.displayTime = this.toTimeString(this._time)
    }

    onBlur(args) {
        console.log("blur!")

        // blur event will be triggered when the user leaves the TextField
        // let textField = <TextField>args.object;
        // textField.focus();    
    }
    onFocus(args){
        let textField = <TextField>args.object;
        setTimeout(() => textField.focus(), 300)
    }
}