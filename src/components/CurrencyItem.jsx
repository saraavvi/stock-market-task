import React from "react";
import { Link } from "react-router-dom";

export default function CurrencyItem({ currencyItem }) {
  return (
    <div>
      <Link to={`/currencies/${currencyItem.ticker}`}>
        {currencyItem.name} price: {currencyItem.price}
      </Link>
    </div>
  );
}
