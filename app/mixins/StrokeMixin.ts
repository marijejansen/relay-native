import { Component, Vue } from 'vue-property-decorator';
import { ICourseTimes } from '../models/interfaces/ICourseTimes';
import translate from '@/locales/i18n';

@Component
class StrokeMixin extends Vue {
  public getStrokeNameLong(stroke: keyof ICourseTimes): string {
    switch (stroke) {
      case 'freestyle50M':
        return translate.t('times.strokes.50free.long').toString();
      case 'freestyle100M':
        return translate.t('times.strokes.100free.long').toString();
      case 'freestyle200M':
        return translate.t('times.strokes.200free.long').toString();
      case 'backstroke50M':
        return translate.t('times.strokes.50back.long').toString();
      case 'backstroke100M':
        return translate.t('times.strokes.100back.long').toString();
      case 'breaststroke50M':
        return translate.t('times.strokes.50breast.long').toString();
      case 'breaststroke100M':
        return translate.t('times.strokes.100breast.long').toString();
      case 'butterfly50M':
        return translate.t('times.strokes.50fly.long').toString();
      case 'butterfly100M':
        return translate.t('times.strokes.100fly.long').toString();
    }
  }

  public getStrokeNameShort(stroke: keyof ICourseTimes): string {
    switch (stroke) {
      case 'freestyle50M':
        return translate.t('times.strokes.50free.short').toString();
      case 'freestyle100M':
        return translate.t('times.strokes.100free.short').toString();
      case 'freestyle200M':
        return translate.t('times.strokes.200free.short').toString();
      case 'backstroke50M':
        return translate.t('times.strokes.50back.short').toString();
      case 'backstroke100M':
        return translate.t('times.strokes.100back.short').toString();
      case 'breaststroke50M':
        return translate.t('times.strokes.50breast.short').toString();
      case 'breaststroke100M':
        return translate.t('times.strokes.100breast.short').toString();
      case 'butterfly50M':
        return translate.t('times.strokes.50fly.short').toString();
      case 'butterfly100M':
        return translate.t('times.strokes.100fly.short').toString();
    }
  }

  public getStrokeNameSuperShort(stroke: keyof ICourseTimes): string {
    switch (stroke) {
      case 'freestyle50M':
        return translate.t('times.strokes.50free.supershort').toString();
      case 'freestyle100M':
        return translate.t('times.strokes.100free.supershort').toString();
      case 'freestyle200M':
        return translate.t('times.strokes.200free.supershort').toString();
      case 'backstroke50M':
        return translate.t('times.strokes.50back.supershort').toString();
      case 'backstroke100M':
        return translate.t('times.strokes.100back.supershort').toString();
      case 'breaststroke50M':
        return translate.t('times.strokes.50breast.supershort').toString();
      case 'breaststroke100M':
        return translate.t('times.strokes.100breast.supershort').toString();
      case 'butterfly50M':
        return translate.t('times.strokes.50fly.supershort').toString();
      case 'butterfly100M':
        return translate.t('times.strokes.100fly.supershort').toString();
    }
  }

  public getStrokeNamesSuperShort(): string[] {
    const strokes = [
      translate.t('times.strokes.50free.supershort').toString(),
      translate.t('times.strokes.100free.supershort').toString(),
      translate.t('times.strokes.200free.supershort').toString(),
      translate.t('times.strokes.50back.supershort').toString(),
      translate.t('times.strokes.100back.supershort').toString(),
      translate.t('times.strokes.50breast.supershort').toString(),
      translate.t('times.strokes.100breast.supershort').toString(),
      translate.t('times.strokes.50fly.supershort').toString(),
      translate.t('times.strokes.100fly.supershort').toString()
    ];
    return strokes;
  }

  public getStrokeIndex(stroke: keyof ICourseTimes) : number {
    switch (stroke) {
      case 'freestyle50M':
        return 0;
      case 'freestyle100M':
        return 1;
      case 'freestyle200M':
        return 2;
      case 'backstroke50M':
        return 3;
      case 'backstroke100M':
        return 4;
      case 'breaststroke50M':
        return 5;
      case 'breaststroke100M':
        return 6;
      case 'butterfly50M':
        return 7;
      case 'butterfly100M':
        return 8;
    }
  }
}

export default StrokeMixin;
