import React, { useState, useEffect } from "react";

export default function CryptoDetailPage(props) {
  const [cryptoData, setCryptoData] = useState(null);
  useEffect(() => {
    const id = props.match.params.id;
    const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCryptoData(data));
  }, []);

  return (
    <div>
      <h2>Crypto Detail Page</h2>
      {cryptoData && (
        <>
          <h2>{cryptoData.name}</h2>
          <p>Price: {cryptoData.price}</p>
          <p>Market: {cryptoData.market}</p>
          <p>Today: {cryptoData.today}</p>
        </>
      )}
    </div>
  );
}
