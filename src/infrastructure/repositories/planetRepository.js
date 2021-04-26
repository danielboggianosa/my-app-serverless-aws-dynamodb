'use strict';

const swapi = require('swapi-node')

module.exports = class UserRepository {

  constructor() {}

  async getPlanets() {

    const Results = await swapi.getPlanets()

    if (!Results) {
      throw new Error('No se pudo encontrar planetas')
    }

    const data ={
        total: Results.count,
        siguiente: Results.next,
        anterior: Results.previous,
        resulados: Results.results.map(result => {
            return {
                nombre: result.name,
                periodo_rotacion: result.rotation_period,
                periodo_orbital: result.orbital_period,
                diametro: result.diameter,
                clima: result.climate,
                gravedad: result.gravity,
                terreno: result.terrain,
                agua_superficie: result.surface_water,
                poblacion: result.population,
                residentes: result.residents,
                peliculas: result.films,
                creado: result.created,
                editado: result.edited,
                url: result.url,
            }
        })
    }

    return data;
  }
}