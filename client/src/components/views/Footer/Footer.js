import React from "react";
import { SmileTwoTone } from "@ant-design/icons";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        {" "}
        BananaDev <SmileTwoTone />
      </p>
    </div>
  );
}

export default Footer;
