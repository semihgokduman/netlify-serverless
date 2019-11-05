exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      'message': 'Hello there!',
      'another_key': 'another value'
    })
  }
}
