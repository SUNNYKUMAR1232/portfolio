"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { use } from "react";
import GetTuchForm from "./GetTuchForm";
import HeroImage from "../../assets/image/hero-image.png";
import { motion } from "framer-motion";
const GetTouch = () => {
  return (
    <Box sx={useStyles.root}>
      
        <motion.p
        animate={useStyles.animate}
        initial={useStyles.initial}
        transition={useStyles.transition(1,0.5)}
        style={useStyles.Text}>Get In Touch</motion.p>
        <Grid container sx={useStyles.Container}>
          <Grid item xs={6} sx={useStyles.GridItemS}>
            <motion.div
            animate={useStyles.animate}
            initial={useStyles.initial}
            transition={useStyles.transition(1,1)}
            whileHover={{ scale: 1.1 }}
            style={useStyles.HeroImageIcon}>
              <Image src={HeroImage} alt="hero" width={400} height={400} />
            </motion.div>
          </Grid>
          <Grid item xs={6} sx={useStyles.GridItemS1}>
            <GetTuchForm />
          </Grid>
        </Grid>
      </Box>
    
  );
};

export default GetTouch;
const useStyles = {
  root: {
    backgroundColor: "#ffffff",
    color: "#c7c4c4",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  HeroImageIcon: {
    borderRadius: "50%",
    backgroundColor: "#e4e4e4d0",
  },
  GridItemS: {
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  GridItemS1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  Text: {
    color: "#000000",
    fontWeight: "bold",
    height: "3rem",
    fontSize: "2rem",
  },
  Container: {
    width: { xs: "100%", md: "1080px" },
    height: "100%",
    backgroundColor: "#ffffff",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -20,
  },
  transition: (val,del) => [
    {
      duration: val,
      delay:del,
      damping: 20,
      ease: "easeInOut",
    },
  ],
};
