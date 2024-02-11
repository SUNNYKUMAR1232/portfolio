'use client'
import React from "react";
 
const DownloadButtons = ({}) => {
    const onButtonClick = () => {
        const pdfUrl = "../../assets/image/hero-image.png";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.png"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <center>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </>
    );
};
 
export default DownloadButtons;