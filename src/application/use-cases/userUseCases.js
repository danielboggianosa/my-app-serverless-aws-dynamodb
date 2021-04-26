'use strict';

module.exports = class UserUseCases {
  constructor(appContext) {
    this.appContext = appContext;
  }

  async getUser(userId) {
    // TODO: Try to validate in a better way
    if(!userId) {
      throw new TypeError('UserId no está definido');
    }
    const data = await this.appContext.repositories.userRepository.getUserById(userId);
    return data;
   }

  async createUser(user) {
    // TODO: Try to validate in a better way
    /* if(!user.userId || user.userId !== "string" ) {
      throw new TypeError('UserId no es válido');
    } */
    const data = await this.appContext.repositories.userRepository.createUser(user);
    return data;
   }
}