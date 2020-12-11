import React, { useState, useEffect } from "react";
import CryptoItem from "../components/CryptoItem";

export default function CryptoPage() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/crypto.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCryptoData(data.usd));
  }, []);

  return (
    <div>
      <h2>Crypto Page</h2>
      {cryptoData &&
        Object.entries(cryptoData).map((item) => {
          const key = item[0];
          const value = item[1];
          return <CryptoItem key={key} cryptoItem={value} />;
        })}
    </div>
  );
}
