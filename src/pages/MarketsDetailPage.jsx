import React, { useState, useEffect } from "react";
import MarketDetailItem from "../components/MarketDetailItem";

export default function MarketsDetailPage(props) {
  const [marketData, setMarketData] = useState(null);
  console.log(props);

  useEffect(() => {
    const id = props.match.params.id;
    const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMarketData(data));
  }, []);

  return (
    <div>
      {marketData && <h2>Markets detail page for {props.match.params.id} </h2>}
      {marketData &&
        Object.entries(marketData).map((item) => {
          //   console.log(item);
          const key = item[0];
          const value = item[1];
          //   console.log(value);
          return <MarketDetailItem key={key} marketDetailItem={value} />;
        })}
    </div>
  );
}
