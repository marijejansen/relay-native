import translate from '@/locales/i18n'

export enum Relay {
  Free200,
  Free400,
  Free800,
  Medley200,
  Medley400
}

export const RelayStrings = new Map<Relay, string>([
  [Relay.Free200, translate.t('calculate.relays.200free').toString()],
  [Relay.Free400, translate.t('calculate.relays.400free').toString()],
  [Relay.Free800, translate.t('calculate.relays.800free').toString()],
  [Relay.Medley200, translate.t('calculate.relays.200medley').toString()],
  [Relay.Medley400, translate.t('calculate.relays.400medley').toString()]
]);

