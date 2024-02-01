import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useProfile from "../../hooks/useProfile";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
 
 const stripe = useStripe()
 const elements = useElements()
 const [error,setError] =useState('')
 const axiosSecure =useAxiosSecure()
 const [clientSecret,setClientSecret] =useState('')
 const {user} =useAuth()
 const [transactionId,setTransactionId]=useState('')
 const normalizedUserInfo =useProfile()
 console.log(normalizedUserInfo);
  const totalPrice = 1000
  const navigate = useNavigate()


 useEffect(()=>{
    axiosSecure.post('/vendor-payment',{price: totalPrice})
    .then(res=>{
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
 },[axiosSecure,totalPrice])




  const handleSubmit = async(event) =>{
    event.preventDefault()

    if(!stripe || !elements){
      return
    }

    const card =elements.getElement(CardElement)

    if(card===null){
      return
    }   

    const {error,paymentMethod} =await stripe.createPaymentMethod({
      type:'card',
      card
    })
   if(error){
    console.log('payment method',error);
    setError(error.message)
   }
   else
   {
   console.log('payment method',paymentMethod);
   setError('')
   }
    

   //confirm payment
   const {paymentIntent,error: confirmError} =await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
      card:card,
      billing_details:{
        email: user?.email || 'anonymous',
        name: user?.displayName ||'anonymous'
      }
    }
  })
  if(confirmError){
    console.log('confirm error',confirmError);
  }
  else{
    console.log('payment intent',paymentIntent);
    if(paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id)
      Swal.fire({
        position:"top-end",
        icon:"success",
        title:`Payment is successful`,
        showConfirmButton:false,
        timer:1500
      })
      //now save the payment in database
      const payment ={
        email: user?.email,
        price:totalPrice,
        shop: normalizedUserInfo?.shop,
        shopId:normalizedUserInfo?._id,
        transactionId: paymentIntent.id
      }
      console.log(payment);
      const res = await axiosSecure.post('/vendorPayments',payment)
      console.log('payment done',res.data);
    }
   
    const patchData = {
      badge: 'gold',
    };
  
    const patchRes = await axiosSecure.patch(`/vendor/${user?.email}`, patchData);
    if(patchRes.data.modifiedCount){
      navigate('/')
    }

   


  }


  }



  return (
   <form onSubmit={handleSubmit}>
    <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-warning" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
   </form>
  );
};

export default CheckoutForm;