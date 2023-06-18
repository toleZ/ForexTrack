import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Row from "./Row";
import { v4 } from "uuid";
import TableHeader from "./TableHeader";

const Table = () => {
  const { rates } = useSelector(({ foregein }) => foregein);

  return (
    <main className="w-5/6 mx-auto my-4">
      <SearchBar />
      <div className="w-full text-left mt-6 p-4 bg-gray-400/10 rounded-md">
        <TableHeader />
        <section>
          {Object.entries(rates).map(([symbol, rate]) => (
            <Row symbol={symbol} rate={rate} key={symbol + v4()} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Table;
