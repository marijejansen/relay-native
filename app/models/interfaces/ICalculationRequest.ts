import { Swimmer } from '../Swimmer';
import { Relay } from '../relay';
import { Course } from '../Course';

export interface ICalculationRequest{
    Swimmers: Swimmer[],
    Course: Course,
    Relay: Relay,
    CalculateForYear: number
}