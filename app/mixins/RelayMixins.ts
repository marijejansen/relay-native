import { Component, Vue } from 'vue-property-decorator';
import translate from '@/locales/i18n';
import { Relay } from '@/models/relay';
import { Course } from '@/models/Course';
import { Gender } from '@/models/gender';

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
        [Course.ShortCourse, translate.t('calculate.courses.short').toString()]
      ])

      private genderShortMap = new Map<Gender, string>([
        [Gender.Female, translate.t('calculate.gender.short.female').toString()],
        [Gender.Male, translate.t('calculate.gender.short.male').toString()],
        [Gender.Mix, translate.t('calculate.gender.short.mixed').toString()],
        [Gender.Unknown, translate.t('calculate.gender.short.unknown').toString()]
      ])

      getRelayString(relay: string): string {
        return this.relayMap.get((<any>Relay)[relay]);
      }

      getCourseString(course: string): string {
        return this.courseMap.get((<any>Course)[course]);
      }

      getGenderStringShort(gender: Gender): string {
        return this.genderShortMap.get(gender);
      }
}

export default RelayMixin;
