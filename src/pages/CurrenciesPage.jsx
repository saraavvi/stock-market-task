import React, { useState, useEffect } from "react";
import CurrencyItem from "../components/CurrencyItem";

export default function CurrenciesPage() {
  const [currencyData, setCurrenceData] = useState(null);
  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/currencies.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCurrenceData(data.sek));
  }, []);

  return (
    <div>
      <h2>Currencies Page</h2>
      {currencyData &&
        Object.entries(currencyData).map((item) => {
          const key = item[0];
          const value = item[1];
          return <CurrencyItem key={key} currencyItem={value} />;
        })}
    </div>
  );
}
