import axios, { AxiosResponse } from 'axios';

const api = axios.create();

class FetchPlanetsFromApi {
  public async execute(planetName: string): Promise<any>{

    const planetInfo = await api.get(`https://swapi.dev/api/planets/?search=${planetName}`)
          .then((response: AxiosResponse) => { return response.data});

          if(planetInfo.count === 0) {
            throw new Error("Planeta não encontrado");
          }

          return planetInfo;
  }
}

export default FetchPlanetsFromApi;