import { Gender } from '../gender';
import { Swimmer } from '../Swimmer';

export interface IRelayTeam{
    gender: Gender,
    age: number,
    ageGroup: number,
    swimmers: Swimmer[],
    time: number
}