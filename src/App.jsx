import "./App.css";
import Quote from "./components/query/Quote";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    };

    fetchQuote();
  }, []);

  return (
    <>
      <div>
        <Quote quote={quote} />
        <Quote quote={quote} />
      </div>
    </>
  );
}

export default App;
