import { Course } from '@/models/Course';
import { Relay } from '@/models/relay';
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';

export interface CalculateState {
    year: number;
    course: Course;
    relay: Relay;
    relayTeams: IRelayTeam[];
    isMasters: boolean;
}
