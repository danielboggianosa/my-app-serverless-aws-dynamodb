# Serverless Framework Node Express API on AWS

Este proyecto muestra cómo desarrollar y desplegar un servicio API con Node, Express y con respaldo de la base de datos DyanamoDB, corriendo en Lambda de AWS usando el tradicional framework Serverles.

#### Daniel Boggiano Sáenz
correo: dev@danielboggiano.com

#### Documentation del uso de la API
https://documenter.getpostman.com/view/14887105/TzJycFwh

### Deployment

Este ejemplo ha sido creado para trabajar con el panel del framework Serverless, el cual incluye características avanzadas como CI/CD, monitoreo, métricas, etc.
This example is made to work with the Serverless Framework dashboard, which includes advanced features such as CI/CD, monitoring, metrics, etc.

Para desplegar con Dashboard primero debes hacer un login con:

```
serverless login
```

Instalar dependencias con:

```
npm install
```

y luego desplegar con el comando:

```
serverless deploy
```

Después de desplegar, verás un resultado similar a este:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-express-dynamodb-api.zip file to S3 (718.53 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
....................................
Serverless: Stack update finished...
Service Information
service: aws-node-express-dynamodb-api
stage: dev
region: us-east-1
stack: aws-node-express-dynamodb-api-dev
resources: 13
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/{proxy+}
functions:
  api: aws-node-express-dynamodb-api-dev-api
layers:
  None
```
