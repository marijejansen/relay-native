import { Gender } from '../gender';
import { Swimmer } from '../Swimmer';

export interface IRelayTeam{
    Gender: Gender,
    Age: number,
    AgeGroup: number,
    Swimmers: Swimmer[],
    Time: number
}