import { Relay } from "./relay";

export interface OptionsData {
    forYear: number;
    fromYear: number;
    isMasters: boolean;
    activeRelays: Relay[];
  }