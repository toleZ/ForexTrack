import { v4 } from "uuid";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const DataList = ({ list, toSearch, handleChange, onSelect }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleSelect = (val) => {
    onSelect(val);
    setShow(false);
  };

  return (
    <div className="relative w-full flex items-center">
      <input
        autoComplete="off"
        type="text"
        name="toSearch"
        value={toSearch}
        onChange={handleChange}
        placeholder="Foregein"
        className="h-12 w-full p-2 focus:outline-none rounded-l-md text-gray-400 bg-gray-400/10 hover:text-black focus:text-black hover:bg-gray-400/20 focus:bg-gray-400/20 transition-all duration-300"
      />
      <button
        className="h-12 p-4 text-gray-400 bg-gray-400/10 hover:text-black hover:bg-gray-400/20 active:text-black active:bg-gray-400/40 transition-all duration-300"
        onClick={handleShow}
        type="button"
      >
        {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>

      <div
        className={`absolute w-full top-0 left-0 mt-14 bg-gray-300 rounded-md overflow-y-auto text-center datalist max-h-[25vh] origin-top scale-y-0 ${
          show && "scale-y-100"
        } transition-all duration-300`}
      >
        {list.map((opt) => (
          <option
            key={`Option-${opt}-${v4()}`}
            className="p-2 hover:bg-gray-400/20 hover:font-medium hover:cursor-pointer transition-colors duration-300"
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </option>
        ))}
      </div>
    </div>
  );
};

export default DataList;
