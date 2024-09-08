import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get("https://api.quotable.io/random");
      setQuote(res.data);
    };

    fetchQuote();
  }, []);
  return (
    <div>
      <h1>Get Quotes using fetch API</h1>

      <div>{quote?.content}</div>
    </div>
  );
};

export default Quote;
