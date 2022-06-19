import React from "react";

export default function Footer({ showCond }) {
  return (
    <>
      <footer className={showCond ? "" : "m-0"}>
        © 2021 LegaVac All rights reserved.
      </footer>
    </>
  );
}
