'use strict';

var AWS = require('aws-sdk');

var dynamodb = new AWS.DynamoDB({
  apiVersion: '2012-08-10',
  accessKeyId: process.env['DYNAMO_KEY'] || "AWS_KEY",
  secretAccessKey: process.env['DYNAMO_SECRET_KEY'] || "AWS_SECRET",
  region: process.env['AWS_REGION'] || "ap-northeast-1",
  sslEnabled: false,
  endpoint: process.env['DYNAMO_ENDPOINT'] || 'localhost:8000'
});

module.exports = {
  development: {
    dynamoClient: dynamodb,
    migrations: {
      ProvisionedThroughput: [10, 10],
      tableName: 'npd_migrations'
    }
  },

  staging: {
    dynamoClient: dynamodb,
    migrations: {
      ProvisionedThroughput: [10, 10],
      tableName: 'npd_migrations'
    }
  },

  production: {
    dynamoClient: dynamodb,
    migrations: {
      ProvisionedThroughput: [10, 10],
      tableName: 'npd_migrations'
    }
  }
};