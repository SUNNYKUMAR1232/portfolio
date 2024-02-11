import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LinkData from "../../assets/Data/LinkData.json";
import { Icon } from "@iconify/react";
import FooterLink from "./FooterLink";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <Box sx={FooterStyle.root}>
      <motion.div animate={FooterStyle.animate} initial={FooterStyle.initial}>
        <Box sx={FooterStyle.Container}>
          
            <motion.div
              animate={FooterStyle.animate}
              initial={FooterStyle.initial}
              transition={FooterStyle.transition}
              style={FooterStyle.GridStyle}
            >
              <Typography variant="h5">Sunny&apos;s Portfolio</Typography>
              <Typography variant="p">
                Thank you for visiting my personal portfolio website
              </Typography>
            </motion.div>
          
          <Box sx={FooterStyle.GridStyle}>
            <Typography variant="h5">Quick Links</Typography>
            <motion.div
              animate={FooterStyle.animate}
              initial={FooterStyle.initial}
              transition={FooterStyle.transition}
            >
              {LinkData.map((val, index) => {
                return (
                  <Box key={index} sx={FooterStyle.iconBox}>
                    <Box sx={FooterStyle.icon}>
                      <Icon icon={val.icon} />
                    </Box>
                    <FooterLink path={val.path} name={val.name} />
                  </Box>
                );
              })}
            </motion.div>
          </Box>
          
            <motion.div
              animate={FooterStyle.animate}
              initial={FooterStyle.initial}
              transition={FooterStyle.transition}
              style={FooterStyle.GridStyle}
            >
              <Typography variant="h5">Contact</Typography>
              <Typography variant="p">Phone: +91 1234567890</Typography>
              <Typography variant="p">
                Email:
                <span style={{ color: "#4B6CC1" }}>
                  {" "}
                  Sunnykumar2323@gmail.com
                </span>
              </Typography>
              <Typography variant="p">Address: Patna, Bihar</Typography>
            </motion.div>
          
        </Box>
          <Box sx={FooterStyle.Common}>
            <Typography variant="h6">
              © 2023 Sunny Kumar. All rights reserved.
            </Typography>
          </Box>
      </motion.div>
    </Box>
  );
};

export default Footer;
const FooterStyle = {
  root: {
    backgroundColor: "#14104d",
    color: "#fff",
    width: "100%",
    height: { xs: "100vh", md: "60vh" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    
  },
  Container: {
    width: { xs: "600px", md: "920px" },
    height: "100%",
    paddingTop: "2.5rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "2rem", md: "10rem" },

  },
  Common: {
    display: "flex",
    justifyContent: "center",
    height: "9%",
    width: "100%",
  },
  Common1: {
    display: "flex",
    height: "100%",
    width: "100%",
    padingBottom: "12rem",
  },
  GridStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  iconBox: {
    display: "flex",
    gap: "8px",
  },
  icon: {
    fontSize: "1.3rem",
    color: "#fff",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -20,
  },
  transition: {
    duration: 1,
    damping: 20,
    ease: "easeInOut",
  },
};
