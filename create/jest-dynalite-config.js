'use strict';

module.exports = {
  tables: [
    {
      TableName: `fakeTable`,
      KeySchema: [{AttributeName: 'id', KeyType: 'HASH'}],
      AttributeDefinitions: [
          {AttributeName: 'id', AttributeType: 'S'},
          {AttributeName: 'capacity', AttributeType: 'N'},
          {AttributeName: 'color', AttributeType: 'S'},
          {AttributeName: 'dropable', AttributeType: 'B'}
        ],
      ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},
    },
  ],
  basePort = 3000,
};