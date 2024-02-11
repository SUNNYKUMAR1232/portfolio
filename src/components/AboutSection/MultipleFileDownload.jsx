"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";

const DownloadButton = ({ fileUrl, name, ext }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    console.log(url);   
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}_${Date.now()}.${ext}`;
    link.click();

    setIsDownloading(false);
  };

  return (
    <Button
      sx={DownloadButtonStyle}
      disabled={isDownloading}
      onClick={handleDownload}
    >
      Download {name.toUpperCase()}
    </Button>
  );
};

export default DownloadButton;
const DownloadButtonStyle = {
  width: "30%",
  height: "100%",
  backgroundColor: "#c2c2c2d0",
  color: "black",
  fontSize: "1.2rem",
  textAlign: "center",
  borderRadius: "0.5rem",
  ":hover": {
    backgroundColor: "black",
    color: "white",
  },
};
