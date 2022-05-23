import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = ({ singleOrder }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-4 font-montserrat">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-primary my-8 w-full"
        disabled={!stripe}
      >
        Pay{" "}
        {Number(singleOrder?.productInfo?.orderQty) *
          Number(singleOrder?.productInfo?.price)}{" "}
        $
      </button>
    </form>
  );
};

export default CheckoutForm;
