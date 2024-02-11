"use client";
import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
const DounloadButton = ({ url, name, ext }) => {
  const dounload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", `${name}_${Date.now()}.${ext}`);
    aTag.click();
    aTag.remove();
  };
  return (
    <motion.button

      whileHover={{ scale: 1.1, backgroundColor: "#000000" ,color:"#ffffff"}}
      style={DownloadButtonStyle}
      onClick={() => dounload(url)}
    >
      {name.toUpperCase()}
    </motion.button>
  );
};

export default DounloadButton;
const DownloadButtonStyle = {
  width: "35%",
  height: "35px",
  color: "black",
  fontSize: "1.2rem",
  textAlign: "center",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0px 0px 10px 0px #000000",
 
};
