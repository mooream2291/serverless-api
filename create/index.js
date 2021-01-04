'use strict';
const uuid = require('uuid').v4;
const mugModel = require('./mug.schema');

exports.handler = async (event) => {
  const id = uuid();
  const { capacity, color, dropable } = JSON.parse(event.body);

  try {
    const record = new mugModel({ id, capacity, color, dropable });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }

};