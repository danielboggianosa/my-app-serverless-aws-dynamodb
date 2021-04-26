'use strict';

const UserRepository = require('../repositories/userRepository');
const PeopleRepository = require('../repositories/peopleRepository')
const PlanetRepository = require('../repositories/planetRepository')
const ProductRepository = require('../repositories/productRepository')

module.exports = () => {
  const userRepository = new UserRepository();
  const peopleRepository = new PeopleRepository();
  const planetRepository = new PlanetRepository();
  const productRepository = new ProductRepository();

  const appContext = {
    repositories: {
      userRepository: userRepository,
      peopleRepository,
      planetRepository,
      productRepository
    }
  };

  return appContext;
};