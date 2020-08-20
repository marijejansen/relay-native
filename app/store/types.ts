import { Swimmer } from '@/models/Swimmer';

export interface RootState {
    selectedSwimmers: Array<Swimmer>;
    saving: boolean;
    fromYear: number;
    forYear: number,
    isMasters: boolean,
  }