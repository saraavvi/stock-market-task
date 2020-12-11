import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <div className="container">
      <div>
        <Link to="/crypto/">Crypto</Link>
      </div>
      <div>
        <Link to="/currencies/">Currencies</Link>
      </div>
      <div>
        <Link to="/indexes/">Indexes</Link>
      </div>
      <div>
        <Link to="/markets/">Markets</Link>
      </div>
    </div>
  );
}
