import { useDispatch, useSelector } from "react-redux";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import {
  sortByChange,
  sortBySymbol,
} from "../redux/slices/foregein/foregeinSlice";

const TableHeader = () => {
  const dispatch = useDispatch();
  const { isSorted } = useSelector(({ foregein }) => foregein);

  const handleSortBySymbol = () => {
    !isSorted || isSorted === "bySymbolUP"
      ? dispatch(sortBySymbol("DOWN"))
      : dispatch(sortBySymbol("UP"));
  };
  const handleSortByChange = () => {
    !isSorted || isSorted === "byChangeUP"
      ? dispatch(sortByChange("DOWN"))
      : dispatch(sortByChange("UP"));
  };

  return (
    <section className="p-2 grid grid-cols-3 text-lg font-medium mb-2 border-b-2 border-gray-400/50">
      <h1 className="col-span-1 md:col-span-2 flex items-center">
        Symbol
        <button
          onClick={handleSortBySymbol}
          className={`${
            !isSorted || isSorted.includes("byChange")
              ? "text-gray-400/50"
              : "text-blue-400 hover:scale-[125%] transition-all duration-200"
          }`}
        >
          {(!isSorted || isSorted.includes("byChange")) && (
            <MdKeyboardArrowRight />
          )}
          {isSorted === "bySymbolUP" && <MdKeyboardArrowDown />}
          {isSorted === "bySymbolDOWN" && <MdKeyboardArrowUp />}
        </button>
      </h1>
      <h1 className="col-span-2 md:col-span-1 flex items-center">
        Change
        <button
          onClick={handleSortByChange}
          className={`${
            !isSorted || isSorted.includes("bySymbol")
              ? "text-gray-400/50"
              : "text-blue-400 hover:scale-[125%] transition-all duration-200"
          }`}
        >
          {(!isSorted || isSorted.includes("bySymbol")) && (
            <MdKeyboardArrowRight />
          )}
          {isSorted === "byChangeUP" && <MdKeyboardArrowDown />}
          {isSorted === "byChangeDOWN" && <MdKeyboardArrowUp />}
        </button>
      </h1>
    </section>
  );
};

export default TableHeader;
