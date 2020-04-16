import { Swimmer } from '@/models/Swimmer';

export interface RootState {
    selectedSwimmers: Array<Swimmer>;
    loading: boolean;
    fromYear: number;
  }