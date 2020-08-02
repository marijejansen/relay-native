import baseRepository from './baserepository'
import { IRelayTeam } from '@/models/interfaces/IRelayTeam';
import { ICalculationRequest } from '@/models/interfaces/ICalculationRequest';

export default {

    async getRelayTeamsMasters(request: ICalculationRequest): Promise<IRelayTeam[]> {
        return baseRepository
        .post(
          `/Calculation/getBestMastersTeams`, request
        )
        .then(response => {
          return response.data;
        });

    },

    async getRelayTeamsAllIn(request: ICalculationRequest): Promise<IRelayTeam[]> {
        return baseRepository
        .post(
          `/Calculation/getBestTeams`, request
        )
        .then(response => {
          return response.data;
        });

    }
}