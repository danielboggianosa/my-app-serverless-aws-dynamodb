'use strict';

module.exports = class PeopleUseCases {
  constructor(appContext) {
    this.appContext = appContext;
  }

  async getPerson(personId) {
    // TODO: Try to validate in a better way
    if(!personId) {
      throw new TypeError('UserId is not defined');
    }
    const data = await this.appContext.repositories.peopleRepository.getPeopleById(personId);
    return data;
   }
}