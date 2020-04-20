import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import { Swimmer } from '@/models/Swimmer';
import TimeFormatMixin from '@/mixins/TimeFormatMixin'

@Component({components: {}})
export default class TimesItem extends Mixins(TimeFormatMixin) {

    showDetails: boolean = false;

    showEdit: boolean = false;

    @Prop()
    private item!: Swimmer;

    timeString(seconds: number){
        return this.toTimeString(seconds);
    }

    toggleDetails(){
        this.showDetails = !this.showDetails;
        this.showEdit = false;
    }


}