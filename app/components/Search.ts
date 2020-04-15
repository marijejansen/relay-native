import { Component, Vue } from "vue-property-decorator";
import './Search.scss'
import { Swimmer } from '@/models/Swimmer';
import searchRepository from '@/repositories/search-repository'

@Component
export default class Search extends Vue {
  private firstName: string = "";
  private lastName: string = "";

  searchResult?: Swimmer[] = [];

  results(){
    console.log("TEST:   results")
    //TODO: kan dit weg?
    if(this.searchResult != undefined){
      return this.searchResult;
    }
  }

  test(){
    const swimmers: Swimmer[] = [{
      id: 123,
      firstName: "Marije",
      lastName: "Jansen",
      birthYear: 1985,
      clubName: "ZPC Amersfoort",
      position: 0,
      gender: 0,
      time: 0,
      //@ts-ignore
      longCourseTimes: [],
      //@ts-ignore
      shortCourseTimes: [],

    },{
      id: 124,
      firstName: "Martijn",
      lastName: "Giezen",
      birthYear: 1985,
      clubName: "ZPC Amersfoort",
      position: 0,
      gender: 1,
      time: 0,
      //@ts-ignore
      longCourseTimes: [],
      //@ts-ignore
      shortCourseTimes: [],
    }];

    return swimmers;

  }

  async search() {
    await searchRepository.getSearch(this.firstName, this.lastName)
      .then(response => this.searchResult = response);
      console.log("TEST:   search")
  }
}