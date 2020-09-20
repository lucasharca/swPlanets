import Planet from '../schemas/Planet';

import FetchPlanetsFromApi from '../utils/FetchPlanetsFromApi';

interface RequestDTO {
  name: string,
  climate: string, 
  terrain: string,
}

class CreatePlanetService {
  public async execute({name, climate, terrain}: RequestDTO): Promise<any> {
    const fetchPlanet = new FetchPlanetsFromApi();
    const planetInfo = await fetchPlanet.execute(name);
    const filmsQnt = planetInfo.results[0].films.length;
    
    const planet = new Planet({name, climate, terrain, filmsQnt});
    planet.save().then((response) => { return response });
    return planet;
  }
}

export default CreatePlanetService;