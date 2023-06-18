import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import DataList from "./DataList";
import { useState } from "react";
import { getBase } from "../redux/slices/foregein";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { base, rates } = useSelector(({ foregein }) => foregein);

  const [toSearch, setToSearch] = useState(base);

  const handleChange = (e) => {
    setToSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toSearch && dispatch(getBase(toSearch));
  };

  const onSelect = (value) => {
    setToSearch(value);
    dispatch(getBase(value));
  };

  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <DataList
        list={Object.keys(rates).filter((elm) => elm.includes(toSearch))}
        toSearch={toSearch}
        handleChange={handleChange}
        onSelect={onSelect}
      />
      <button
        type="submit"
        className="h-12 p-4 rounded-r-md text-gray-400 bg-gray-400/10 hover:text-black hover:bg-gray-400/20 active:text-black active:bg-gray-400/40 transition-all duration-300"
      >
        <BiSearchAlt />
      </button>
    </form>
  );
};

export default SearchBar;
