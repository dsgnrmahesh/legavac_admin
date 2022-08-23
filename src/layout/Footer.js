import React from "react";

export default function Footer({ showCond }) {
  return (
    <>
      <footer className={showCond ? "" : "m-0"}>
        © {new Date().getFullYear()} LegaVac All rights reserved.
      </footer>
    </>
  );
}
