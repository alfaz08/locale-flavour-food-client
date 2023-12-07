import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
    <div>
        <div className="hidden form-control  md:block">
      
        <div className="relative flex">
  <input
    type="text"
    placeholder="Search for item"
    className="w-96 pl-4 pr-10 py-2 input input-bordered border-green-600"
  />
  <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-2xl text-green-600" />
</div>

    </div>
    </div>
  );
};

export default Search;