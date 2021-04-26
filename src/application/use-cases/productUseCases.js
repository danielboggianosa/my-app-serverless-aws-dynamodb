'use strict';

module.exports = class ProductUseCases {
  constructor(appContext) {
    this.appContext = appContext;
  }

  async getProduct(productId) {
    // TODO: Try to validate in a better way
    if(!productId) {
      throw new TypeError('productId no está definido');
    }
    const data = await this.appContext.repositories.productRepository.getProductById(productId);
    return data;
   }

  async createProduct(product) {
    // TODO: Try to validate in a better way
    /* if(!product.productId || product.productId !== "string" ) {
      throw new TypeError('ProductId no es válido');
    } */
    const data = await this.appContext.repositories.productRepository.createProduct(product);
    return data;
   }
}