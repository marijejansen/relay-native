import { Course } from '@/models/Course';
import { Relay } from '@/models/relay';
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';

export interface CalculateState {
    course: Course;
    relay: Relay;
    relayTeams: IRelayTeam[];
    selectedForCalculation: number[];
}
