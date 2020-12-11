import React, { useState, useEffect } from "react";

export default function CurrenciesDetailPage(props) {
  console.log(props);
  const [currenciesData, setCurrenciesData] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCurrenciesData(data));
  }, []);

  return (
    <div>
      <h2> Currencies Deatail Page</h2>
      {currenciesData && (
        <>
          <p>{currenciesData.name}</p>
          <p>price: {currenciesData.price}</p>
          <p>market: {currenciesData.market}</p>
          <p>today: {currenciesData.today}</p>
          <p>w1: {currenciesData.w1}</p>
          <p>y3: {currenciesData.y3}</p>
          <p>y5: {currenciesData.y5}</p>
          <p>ytd: {currenciesData.ytd}</p>
        </>
      )}
    </div>
  );
}
