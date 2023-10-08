import React from "react";

function Nav() {
  return (
    <>
      <div style={{ opacity: "0.7" }}>Nav Components</div>
      <button
        style={{ backgroundColor: "blue", color: "white", cursor: "pointer" }}
        onClick={window.print}
      >
        Print
      </button>
    </>
  );
}

export default Nav;
