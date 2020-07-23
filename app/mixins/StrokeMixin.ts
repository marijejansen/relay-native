import { Component, Vue } from "vue-property-decorator";
import { CourseTimes } from '../models/CourseTimes';


@Component
class StrokeMixin extends Vue {

    public getStrokeNameLong(stroke: keyof CourseTimes) {
        switch (stroke) {
            case "freestyle50M":
                return '50m freestyle';
            case "freestyle100M":
                return '100m freestyle';
            case "freestyle200M":
                return '200m freestyle';
            case "backstroke50M":
                return '50m backstroke';
            case "backstroke100M":
                return '100m backstroke';
            case "breaststroke50M":
                return '50m breaststroke';
            case "breaststroke100M":
                return '100m breaststroke';
            case "butterfly50M":
                return '50m butterfly';
            case "butterfly100M":
                return '100m butterfly';
        }
    }
    public getStrokeNameShort(stroke: keyof CourseTimes) {
        switch (stroke) {
            case "freestyle50M":
                return '50 free';
            case "freestyle100M":
                return '100 free';
            case "freestyle200M":
                return '200 free';
            case "backstroke50M":
                return '50 back';
            case "backstroke100M":
                return '100 backs';
            case "breaststroke50M":
                return '50 breast';
            case "breaststroke100M":
                return '100 breast';
            case "butterfly50M":
                return '50 fly';
            case "butterfly100M":
                return '100 fly';
        }
    }
    public getStrokeNameSuperShort(stroke: keyof CourseTimes) {
        switch (stroke) {
            case "freestyle50M":
                return '50Fr';
            case "freestyle100M":
                return '100Fr';
            case "freestyle200M":
                return '200Fr';
            case "backstroke50M":
                return '50Ba';
            case "backstroke100M":
                return '100Ba';
            case "breaststroke50M":
                return '50Br';
            case "breaststroke100M":
                return '100Br';
            case "butterfly50M":
                return '50Fl';
            case "butterfly100M":
                return '100Fl';
        }
    }

    public getStrokeNamesSuperShort(): string[] {
        var strokes = ["50Fr", "100Fr", "200Fr", "50Ba", "100Ba", "50Br", "100Br", "50Fl", "100Fl"];
        return strokes
    }

    public getStrokeIndex(stroke: keyof CourseTimes) :number {
        switch (stroke) {
            case "freestyle50M":
                return 0;
            case "freestyle100M":
                return 1;
            case "freestyle200M":
                return 2;
            case "backstroke50M":
                return 3;
            case "backstroke100M":
                return 4;
            case "breaststroke50M":
                return 5;
            case "breaststroke100M":
                return 6;
            case "butterfly50M":
                return 7;
            case "butterfly100M":
                return 8;
        }
    }
}

export default StrokeMixin