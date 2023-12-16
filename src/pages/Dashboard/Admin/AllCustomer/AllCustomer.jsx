import useUserList from "../../../../hooks/useUserList";


const AllCustomer = () => {
  const [user] =useUserList()
  console.log(user);
  return (
    <div>
      
    </div>
  );
};

export default AllCustomer;