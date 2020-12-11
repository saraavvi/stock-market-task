import React from "react";
import { Link } from "react-router-dom";

export default function CryptoItem({ cryptoItem }) {
  return (
    <div>
      <Link to={`/crypto/${cryptoItem.ticker}`}>
        {cryptoItem.name} price: {cryptoItem.price}
      </Link>
    </div>
  );
}
