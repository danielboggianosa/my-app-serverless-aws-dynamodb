'use strict';

module.exports = class PlanetUseCases {
  constructor(appContext) {
    this.appContext = appContext;
  }

  async getPlanets() {
    // TODO: Try to validate in a better way
    const data = await this.appContext.repositories.planetRepository.getPlanets();
    return data;
   }
}