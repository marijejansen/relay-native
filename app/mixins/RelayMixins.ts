import { Component, Vue } from "vue-property-decorator";
import { ICourseTimes } from '../models/interfaces/ICourseTimes';
import translate from '@/locales/i18n'
import { Relay } from '@/models/relay';
import { Course } from '@/models/Course';

@Component
class RelayMixin extends Vue {

    private relayMap = new Map<Relay, string>([
        [Relay.Free200, translate.t('calculate.relays.200free').toString()],
        [Relay.Free400, translate.t('calculate.relays.400free').toString()],
        [Relay.Free800, translate.t('calculate.relays.800free').toString()],
        [Relay.Medley200, translate.t('calculate.relays.200medley').toString()],
        [Relay.Medley400, translate.t('calculate.relays.400medley').toString()]
      ]); 

      private courseMap = new Map<Course, string>([
          [Course.LongCourse, translate.t('calculate.courses.long').toString()],
          [Course.ShortCourse, translate.t('calculate.courses.short').toString()],
      ])

    getRelayString(relay: string): string {
        return this.relayMap.get((<any>Relay)[relay]);
    }

    getCourseString(course: string): string {
        return this.courseMap.get((<any>Course)[course]);
    }

    

}

export default RelayMixin