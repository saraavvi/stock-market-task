import React, { useState, useEffect } from "react";

export default function IndexesDetailPage(props) {
  console.log(props);
  const [indexData, setIndexData] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    const url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${id}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setIndexData(data));
  }, []);

  return (
    <div>
      <h2> Indexes Detail Page</h2>
      {indexData && (
        <>
          <p>{indexData.name}</p>
          <p>price: {indexData.price}</p>
          <p>market: {indexData.market}</p>
          <p>today: {indexData.today}</p>
          <p>w1: {indexData.w1}</p>
          <p>y3: {indexData.y3}</p>
          <p>y5: {indexData.y5}</p>
          <p>ytd: {indexData.ytd}</p>
        </>
      )}
    </div>
  );
}
