import { useParams } from "react-router-dom";
import usePaymentInvoice from "../../../../hooks/usePaymentInvoice";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";

const Invoice = () => {
  const { id } = useParams();
  console.log("id", id);

  const [invoice] = usePaymentInvoice();
  console.log("invoice", invoice);
  // const myInvoice = invoice?.filter(item=>item?._id===id)
  // console.log('this',myInvoice);

  return (
    <div className="container mx-auto">
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
    </div>
  );
};

export default Invoice;
