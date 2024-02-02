import { useParams } from "react-router-dom";
import usePaymentInvoice from "../../../../hooks/usePaymentInvoice";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { MdLocalPrintshop } from "react-icons/md";


import { FiDownload } from "react-icons/fi";



const Invoice = () => {
  const { id } = useParams();
  const [invoice] = usePaymentInvoice();

  

  

  return (
    <div className="container mx-auto">


      <div>
      <div
        className="hero rounded-xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/BqnRgct/header-bg-1.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-10">
          <div className="card card-side  shadow-xl mt-4">
            <figure>
              <img
                src="https://i.ibb.co/pWqHPxd/Green-Modern-Organic-Health-Food-Logo-1.png"
                className="w-42 h-48 p-2"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end grid mt-4">
                <h2 className="font-bold text-xl">
                  Date:{" "}
                  {invoice.date &&
                    new Intl.DateTimeFormat("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(invoice.date))}
                </h2>
                <h2 className="font-bold text-xl">
                  Invoice no: {invoice.transactionId}{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
        <div>
          <h2 className="font-bold mb-4 text-2xl">Invoice To</h2>
          <h2 className="text-lg font-bold">Locale Flavour Food</h2>
          <h2 className="text-lg ">Dhaka,Bangladesh</h2>
          <h2 className="text-lg ">Phone: +880171234569</h2>
          <h2 className="text-lg ">Email: localefood@gmail.com</h2>
        </div>
        <div>
          <h2 className="font-bold mb-4 text-2xl" >Bill To</h2>
          <h2 className="text-lg font-bold">{invoice.name}</h2>
          <h2 className="text-lg ">{invoice.address}</h2>
          <h2 className="text-lg ">Phone: {invoice.phone} </h2>
          <h2 className="text-lg ">Email: {invoice.email}</h2>
        </div>
        <div>
          <h2 className="font-bold mb-4 text-2xl">Overview</h2>
          <h2 className="text-lg ">
            <span className="font-bold">Invoice Date</span>:{" "}
            {invoice.date &&
              new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(invoice.date))}
          </h2>
          <h2  className="text-lg ">
          <span className="font-bold">Due Date:</span>{" "}
            {invoice.date &&
              new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(invoice.date))}
          </h2>
          <h2 className="text-lg "> <span className="font-bold">Payment Method: </span>Visa Card</h2>

          <h2 className="text-lg "><span className="font-bold">Status: </span> {invoice.status}</h2>
        </div>
      </div>


     


      <div className="overflow-x-auto mt-8">
<table className="table table-zebra">
  {/* head */}
  <thead >
    <tr className="bg-green-200">
    <th>#</th>
      <td>Name</td>
      <td>Unit Price</td>
      <td>Quantity</td>
      
      <td>Total Amount</td>
      
    </tr>
  </thead>
  <tbody>


   {
    invoice?.productIds?.map((user,index)=>
      <tr key={user._id}>
      <th>{index+1}</th>
      <td>{user.itemName}</td>
      
      <td>$ {user.price}</td>
      <td>{user.amount}</td>
      
   
      
      <td>
         $ {user.totalPrice}
        </td>
      


    </tr>
      )
  }
   <tr>
      <th colSpan="4"><h2  className="flex justify-end">Grand Total</h2></th>
      <td >
        $ {invoice?.price}
      </td>
    </tr>

  </tbody>
</table>
</div>
      
     <div className="gird grid-cols-1 md:flex justify-between mt-8">
      <div className="text-lg ">
        <h2 className="font-bold text-xl mb-6">Important Note</h2>
        <li>All amounts shown on this invoice are in US dollars</li>
        <li>finance charge of 1.5% will be made on unpaid balances after 30 days.</li>
        <li>Once order done, money can't refund</li>
        <li>Delivery might delay due to some external dependency</li>
      </div>

      <div className="mt-4 md:mt-12">
        <h2 className="text-xl mb-2">Thank you for your shopping</h2>
        <h2 className="text-xl mb-2">Locale Flavour Food Team</h2>
        <div className="">
         
          <div className="flex text-md gap-2 ">
            <h2 className="text-lg mt-1 font-bold ">Follow Us</h2>

            <FaFacebook className=" text-4xl" />
            <AiFillInstagram className="text-4xl"/>
            <IoLogoYoutube className="text-4xl"/>

            <AiFillTwitterCircle className="text-4xl"/>
          </div>
         </div>
      </div>
      <div>

      </div>
     </div>
      </div>
      

      <div className="mt-20 flex justify-center gap-4">
        <div>
        <button
          
            className="btn bg-blue-900 text-white hover:text-white hover:bg-green-700">
              <span>
              <MdLocalPrintshop />
              </span>{" "}
              Print
            </button>
        </div>
        <div className="">
        <button
             
            className="btn  bg-green-300 hover:text-white hover:bg-green-700">
              <span>
              <FiDownload />
              </span>{" "}
              Download
            </button>
        </div>
      </div>

    </div>
  );
};

export default Invoice;
