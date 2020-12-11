import React from "react";
import { Link } from "react-router-dom";

export default function IndexItem({ indexItem }) {
  return (
    <div>
      <Link to={`/indexes/${indexItem.ticker}`}>
        {indexItem.name} price: {indexItem.price}
      </Link>
    </div>
  );
}
