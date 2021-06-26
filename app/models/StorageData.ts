import { Swimmer } from "./Swimmer";

export interface StorageData {
    id: number;
    numberOfSwimmers: number;
    date: Date;
    description: string;
    swimmers: Swimmer[];
  }