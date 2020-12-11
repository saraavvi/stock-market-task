import React, { useState, useEffect } from "react";
import MarketItem from "../components/MarketItem";

export default function MarketsPage() {
  const [marketsData, setMarketsData] = useState(null);
  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/markets.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMarketsData(data));
  }, []);

  return (
    <div>
      <h2>Markets Page</h2>
      {marketsData &&
        Object.entries(marketsData).map((item) => {
          console.log(item);
          const key = item[0];
          const value = item[1];
          return <MarketItem key={key} name={key} marketData={value} />;
        })}
    </div>
  );
}
