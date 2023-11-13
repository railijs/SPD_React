import { useEffect, useState } from "react";
import Quote from "./Quote.js";

function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getQuotes() {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();

      setQuotes(data.quotes);
      setLoading(false);
    }
    getQuotes();
  }, []);

  const quoteJSX = quotes?.map((quote, index) => {
    return <Quote key={index} {...quote} />;
  });

  return <div>{loading ? "loading" : quoteJSX}</div>;
}

export default QuoteList;
