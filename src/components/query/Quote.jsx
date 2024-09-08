import { useQuery } from "react-query";
import getQuote from "./getQuoteApi";

const Quote = () => {
  const { data } = useQuery("quote", () => getQuote());
  return (
    <div>
      <h1>Get Quotes using fetch API</h1>

      <div>{data?.content}</div>
    </div>
  );
};

export default Quote;
