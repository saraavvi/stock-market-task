import React from "react";
import { Link } from "react-router-dom";

export default function MarketItem({ marketData, name }) {
  return (
    <div>
      <Link to={`/markets/${name}`}>{name}</Link>
    </div>
  );
}
