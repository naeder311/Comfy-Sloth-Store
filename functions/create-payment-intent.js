// domain/.netlify/functions/create-payment-intent
// in video shows to use async function.  dont put in the function part

const dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.body) {
    const { cart, total_amount, shipping_fee } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      // Replace this constant with a calculation of the order's amount
      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client
      return shipping_fee + total_amount;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      console.log(error.response);
    }

    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(cart),
    // };
  }
  return {
    statusCode: 200,
    body: 'Create payment Intent',
  };
};
