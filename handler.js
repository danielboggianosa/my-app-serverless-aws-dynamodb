const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");
// const userController = require("./src/users/infraestructura");

const app = express();

const USERS_TABLE = process.env.USERS_TABLE;
const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());
// app.use("users", userController)

app.get("/users/:userId", async function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { userId, name } = Item;
      res.json({ userId, name });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find user with provided "userId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive user" });
  }
});


app.post("/users", async function (req, res) {
  const { userId, name } = req.body;
  if (typeof userId !== "string") {
    res.status(400).json({ error: '"userId" must be a string' });
  } else if (typeof name !== "string") {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ userId, name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create user" });
  }
});

app.get("/products/:productId", async function (req, res) {
  const params = {
    TableName: PRODUCTS_TABLE,
    Key: {
      productId: req.params.productId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { productId, name, description } = Item;
      res.json({ productId, name, description });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find product with provided "productId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive product" });
  }
});
app.post("/products", async function (req, res) {
  const { productId, name, description } = req.body;
  if (typeof productId !== "string") {
    res.status(400).json({ error: '"productId" must be a string' });
  } else if (typeof name !== "string") {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: PRODUCTS_TABLE,
    Item: {
      productId: productId,
      name: name,
      description: description,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ productId, name, description });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create product" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
