import baseRepository from './baserepository'
import { Swimmer } from '@/models/Swimmer';

export default {

    async getSearch(firstName: string, lastName: string): Promise<Swimmer[]> {
        return baseRepository
          .get(
            `/SwimmerData/searchSwimmers?firstName=${firstName}&lastName=${lastName}`
          )
          .then(response => {
            return response.data;
          });
      },

}