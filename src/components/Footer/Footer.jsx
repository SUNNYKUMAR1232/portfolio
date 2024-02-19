import { Box, Typography } from "@mui/material";
import React from "react";
import socialData from "../../assets/Data/ContactLinks.json";
import QuickData from "../../assets/Data/LinkData.json";
import LinkItems from "../navBar/LinkItems";
import { text } from "../navBar/nav.module.css";
const Footer = () => {
  return (
    <Box sx={FooterStyle.root}>
      <Box sx={FooterStyle.Intro}>
        <Typography sx={FooterStyle.Intro.iconText} variant="h5">
          Sunny&apos;s Portfolio
        </Typography>
        <Typography variant="p" sx={FooterStyle.text1}>
          Thank you for visiting my personal portfolio website
        </Typography>
      </Box>
      <Box sx={FooterStyle.Container}>
        <Box sx={FooterStyle.Quicklink}>
          <Typography variant="h5" sx={FooterStyle.text}>
            Quick Links
          </Typography>
          {QuickData.map((val, index) => {
            return (
              <Box key={index} sx={FooterStyle.iconBox}>
                <LinkItems val={val} />
              </Box>
            );
          })}
        </Box>
        <Box sx={FooterStyle.follow}>
          <Typography variant="h5" sx={FooterStyle.text}>
            Follow
          </Typography>
          {socialData.map((val, index) => {
            return (
              <Box key={index} sx={FooterStyle.iconBox}>
                <LinkItems val={val} />
              </Box>
            );
          })}
        </Box>
        <Box sx={FooterStyle.Contact}>
          <Typography variant="h5" sx={FooterStyle.text}>
            Contact
          </Typography>
          <Typography variant="p" sx={FooterStyle.text1}>
            Phone: +91 1234567890
          </Typography>
          <Typography variant="p" sx={FooterStyle.text1}>
            Email:
            <span style={{ color: "#4B6CC1" }} sx={FooterStyle.text1}>
              {" "}
              sunnykumar2323@gmail.com
            </span>
          </Typography>
          <Typography variant="p" sx={FooterStyle.text1}>
            Address: Patna, Bihar
          </Typography>
        </Box>
      </Box>
      <Box sx={FooterStyle.Common}>
        <Typography variant="h6" sx={FooterStyle.text}>
          © 2023 Sunny Kumar. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
const FooterStyle = {
  root: {
    position: "relative",
    backgroundColor: "#14104d8",
    color: "#fff",
    width: "100%",
    height: { xs: "160vh", md: "60vh" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: { xs: "25em", md: "0" },
  },
  Container: {
    position: "relative",
    width: { xs: "600px", md: "80%" },
    paddingTop: "2.5rem",
    display: { xs: "grid", md: "flex" },
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: { xs: "column", md: "row" },
    flexWrap: "wrap",
    gridTemplateColumns: { xs: "150px ", md: "150px 150px" },
    gridAutoRows: "300px",
    gap: "10px",
  },
  Intro: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    iconText: {
      color: "color-mix(in srgb-linear, #17fb02, #2705d1 50%)",
      background: "linear-gradient(120deg, #871616, #0f0540)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      fontSize: "2.5rem",
    },
  },
  text: {
    color: "color-mix(in srgb-linear, #17fb02, #2705d1 50%)",
    background: "linear-gradient(145deg, #6a0f0f, #140c3c)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  text1: {
    color: "#9098d3",
  },
  Common: {
    display: "flex",
    justifyContent: "center",
    height: "9%",
    width: "100%",
  },
  Contact: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
};
