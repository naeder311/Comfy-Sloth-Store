// domain/.netlify/functions/hello
// in video shows to use async function.  dont put in the function part

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Hello, World!',
  };
};
