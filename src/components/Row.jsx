import { useSelector } from "react-redux";

const Row = ({ symbol, rate }) => {
  const { base, symbols } = useSelector(({ foregein }) => foregein);

  const place = Object.entries(symbols).find(([name]) => symbol === name)[1];

  return (
    <article
      className={`p-2 grid grid-cols-3 rounded-md ${
        symbol === base
          ? "bg-blue-400/20"
          : "hover:bg-gray-400/20 hover:font-medium transition-colors duration-300 group"
      }`}
    >
      <span className="hidden md:block col-span-2">{`${symbol} | ${place}`}</span>
      <span className="block md:hidden col-span-1">{symbol}</span>
      <span className="hidden md:block col-span-1">{rate}</span>
      <span className="block md:hidden col-span-2">{rate}</span>
    </article>
  );
};

export default Row;
