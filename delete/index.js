'use strict';

const mugModel = require('./mug.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;

  if (!id) {
    return {
      statusCode: 500,
      response: 'no id found'
    }
  }

  try {
    const data = await mugModel.delete({'id': id})

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