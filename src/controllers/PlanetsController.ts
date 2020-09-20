import Planet from '../schemas/Planet';

import { Request, Response } from 'express';

import CreatePlanetService from '../services/CreatePlanetService';

export default class PlanetsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const {name, climate, terrain} = request.body;
      const planetExists = await Planet.findOne({name: name});

      if(planetExists){
        await planetExists.updateOne({ name, climate, terrain });
        return response.json({message: 'planet updated'});
      }

      const createPlanet = new CreatePlanetService();
      const planet = await createPlanet.execute({name, climate, terrain});
      
      return response.status(200).json(planet)
    }catch(err){
      return response.json({error: err.message})
    }
  }

  public async findOne(request: Request, response: Response): Promise<Response> {
    try {
      const { name, id } = request.query;
      if(name){
        const planet = await Planet.findOne({ name: name});
        return response.status(200).json(planet);
      }
      const planet = await Planet.findById( id );
      return response.status(200).json(planet);
      
    }catch(err){
      return response.json({error: err.message})
    }
  }

  public async list(request: Request, response: Response): Promise<any> {
    try {
      const planets = await Planet.find();
      return response.json(planets);
    }catch(err){
      return response.json({error: err.message})
    }
  }

  public async delete(request: Request, response: Response): Promise<any>{
    try{
      const { id } = request.params;
      const planet = await Planet.findByIdAndDelete(id);
      if(planet){
        return response.json({message: "Planeta deletado"});
      }
      return response.json({message: "Planeta não encontrado"});
    }catch(err){
      return response.json({error: err.message});
    }
  }
}