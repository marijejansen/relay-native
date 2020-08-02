import { Course } from '@/models/Course';
import { Relay } from '@/models/relay';

export interface CalculateState {
    course: Course;
    relay: Relay;
}
