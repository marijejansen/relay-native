import { Component, Vue } from "vue-property-decorator";
import './Search.scss'
import { Swimmer } from '@/models/Swimmer';

@Component
export default class Search extends Vue {
  private firstName: string = "";
  private lastName: string = "";


  private testResult = ['HAHAH', "JA"];
  private searchResult: Swimmer[];

  get results(){
    var club =this.searchResult[0].clubName;
    return club;
  }

  async search() {
    const baseUrl = 'https://swimrelaycalculations.azurewebsites.net';
    const searchUrl = baseUrl + '/api/SwimmerData/searchSwimmers';
    const url = searchUrl + `?firstName=${this.firstName}&lastName=${this.lastName}`;
    fetch(url).then(async response => {
      const res = await response.json();
      this.searchResult = res.data;
    }
      )
  }
}