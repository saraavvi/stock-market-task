import React, { useState, useEffect } from "react";
import IndexItem from "../components/IndexItem";

export default function IndexesPage() {
  const [indexData, setIndexData] = useState(null);
  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/indexes.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setIndexData(data.se));
  }, []);

  return (
    <div>
      <h2>Indexes Page</h2>
      {indexData &&
        Object.entries(indexData).map((item) => {
          const key = item[0];
          const value = item[1];
          return <IndexItem key={key} indexItem={value} />;
        })}
    </div>
  );
}
