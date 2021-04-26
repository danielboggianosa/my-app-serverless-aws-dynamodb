'use strict';

const AWS = require("aws-sdk");

const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE;

module.exports = class ProductRepository {

  constructor() {
    this.dynamoDbClient = new AWS.DynamoDB.DocumentClient();
  }

  async getProductById(productId) {
    const params = {
      TableName: PRODUCTS_TABLE,
      Key: { productId },
    };

    const { Item } = await this.dynamoDbClient.get(params).promise();
    if (!Item) {
      throw new Error('No se pudo encontrar un producto con el "productId" provisto')
    }
    return Item;
  }

  async createProduct({productId, name, description}){
    const params = {
      TableName: PRODUCTS_TABLE,
      Item: { 
        productId,
        name,
        description
      },
    }

    const Item = await this.dynamoDbClient.put(params).promise();
    if(!Item){
      throw new Error('No fue posible crear el producto')
    }  
    return Item;
  }
}