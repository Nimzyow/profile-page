import React from "react";

export const Header = ({ text }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{text}</h3>
    </div>
  );
};

Header.defaultProps = {
  text: "put something here",
};
