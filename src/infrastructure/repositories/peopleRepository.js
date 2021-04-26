'use strict';

const swapi = require('swapi-node')

module.exports = class UserRepository {

  constructor() {}

  async getPeopleById(personId) {

    const Item = await swapi.getPerson(personId)

    if (!Item) {
      throw new Error('No se pudo encontrar a una persona con el "personId" provisto')
    }

    const data = {
        nombre: Item.name,
        altura: Item.height,
        peso: Item.mass,
        color_cabello: Item.hair_color,
        color_piel: Item.skin_color,
        color_ojo: Item.eye_color,
        nacimiento: Item.birth_year,
        genero: Item.gender,
        mundo_natal: Item.homeworld,
        peliculas: Item.films,
        especies: Item.species,
        vehiculos: Item.vehicles,
        naves: Item.starships,
        creado: Item.created,
        editado: Item.edited,
        url: Item.url,
    }

    return data;
  }
}