// firebase/payments/payment_service.js
const functions = require('firebase-functions');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY'); // Replace with your Stripe secret key

exports.createCharge = functions.https.onRequest(async (req, res) => {
  const { amount, source, currency } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: currency || 'usd',
      source,
    });
    res.status(200).send({ charge });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
