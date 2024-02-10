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
 console.log(cart);
 const {user} =useAuth()

 const [transactionId,setTransactionId]=useState('')
 const normalizedUserInfo =useProfile()

 const totalPrice =cart.reduce((total,item)=>total+item.spendMoney,0)
 
  const navigate = useNavigate()
  const [deliveryAddress, setDeliveryAddress] = useState('');
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');

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
        productIds: cart.map(item => ({ productId: item.productId, amount: item.amount, price: item.price,totalPrice:item.spendMoney,shopName:item.shopName,shopEmail:item.shopEmail,itemName:item.name,image:item.image })),
        name: normalizedUserInfo?.name,
        transactionId: paymentIntent.id,
        status:"pending",
        orderName: userName || 'anonymous',
       phoneNumber: phoneNumber,
         address: deliveryAddress,
      }
      console.log(payment);
      const res = await axiosSecure.post('/customerPayments',payment)
      console.log('payment done',res.data);
      

      const orders ={
        email: user?.email,
        date: new Date(),
        productIds: cart.map(item=>item.productId),
        name: normalizedUserInfo?.name,
        status:"pending"
      }
      await axiosSecure.post('/orders',orders)

      refetch()

      // {
      //   cart?.map((item)=><div key={item._id}>
      //       {item.productId}
      //   </div>
      //   )
      // }


      navigate('/dashboard/userPaymentHistory')
    }
   
   

   


  }


  }



  return (
   <form onSubmit={handleSubmit}>
  
  <div>
        <label htmlFor="userName">Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          className="border border-green-300 h-12 mt-4"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          className="border border-green-300 h-12 mt-4"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
  <div>
        <label htmlFor="deliveryAddress ">Delivery Address:</label>
        <input
          type="text"
          id="deliveryAddress"
          value={deliveryAddress}
          className="border border-green-300 h-12 mt-4 mb-4"
          onChange={(e) => setDeliveryAddress(e.target.value)}
          required
        />
      </div>

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