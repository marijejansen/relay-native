import { Relay } from '@/models/relay';
import { StorageData } from '@/models/StorageData';
import { Swimmer } from '@/models/Swimmer';

export interface RootState {
    selectedSwimmers: Array<Swimmer>;
    saving: boolean;
    fromYear: number;
    forYear: number,
    isMasters: boolean,
    visibleRelays: Relay[],
    storageData: Array<StorageData>
  }