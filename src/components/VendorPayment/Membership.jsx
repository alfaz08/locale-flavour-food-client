import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise =loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Membership = () => {
  return (
    <div className="container mx-auto mt-4">
       <Elements stripe={stripePromise}>
         <CheckoutForm></CheckoutForm>
       </Elements>
    </div>
  );
};

export default Membership;