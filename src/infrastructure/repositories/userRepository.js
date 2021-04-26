'use strict';

const AWS = require("aws-sdk");

const USERS_TABLE = process.env.USERS_TABLE;
const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE;

module.exports = class UserRepository {

  constructor() {
    this.dynamoDbClient = new AWS.DynamoDB.DocumentClient();
  }

  async getUserById(userId) {
    const params = {
      TableName: USERS_TABLE,
      Key: { userId },
    };

    const { Item } = await this.dynamoDbClient.get(params).promise();
    if (!Item) {
      throw new Error('No se pudo encontrar un usuario con el "userId" provisto')
    }
    return Item;
  }

  async createUser({userId, email, firstName, lastName}){
    const params = {
      TableName: USERS_TABLE,
      Item: { 
        userId,
        firstName,
        lastName,
        email
      },
    }

    const Item = await this.dynamoDbClient.put(params).promise();
    if(!Item){
      throw new Error('No fue posible crear el usuario')
    }  
    return Item;
  }
}