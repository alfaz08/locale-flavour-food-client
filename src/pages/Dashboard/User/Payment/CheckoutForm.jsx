import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useProfile from "../../../../hooks/useProfile";
import useCart from "../../../../hooks/useCart";


const CheckoutForm = () => {
 
 const stripe = useStripe()
 const elements = useElements()
 const [error,setError] =useState('')
 const axiosSecure =useAxiosSecure()
 const [clientSecret,setClientSecret] =useState('')
 const [cart,refetch] =useCart()
 const {user} =useAuth()
 const [transactionId,setTransactionId]=useState('')
 const normalizedUserInfo =useProfile()
 console.log(normalizedUserInfo);
 const totalPrice =cart.reduce((total,item)=>total+item.spendMoney,0)
 
  const navigate = useNavigate()


 useEffect(()=>{
    axiosSecure.post('/customer-payment',{price: totalPrice})
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
        title:`Your Payment is successful`,
        showConfirmButton:false,
        timer:1500
      })
      //now save the payment in database
      const payment ={
        email: user?.email,
        price:totalPrice,
        date: new Date(),
        cartIds:cart.map(item=>item._id),
        productIds: cart.map(item=>item.productId),
        name: normalizedUserInfo?.name,
        transactionId: paymentIntent.id,
        status:"pending"
      }
      console.log(payment);
      const res = await axiosSecure.post('/customerPayments',payment)
      console.log('payment done',res.data);
      refetch()
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