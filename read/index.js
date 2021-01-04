'use strict';

const mugModel = require('./mug.schema');

exports.handler = async (event) => {
  const { capacity, color, dropable } = JSON.parse(event.body);


  try {
    const record = new mugModel({ id, capacity, color, dropable });
    console.log(record);
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