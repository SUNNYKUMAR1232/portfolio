"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ExprerienceCard from "./ExprerienceCard";
import ExpData from "../../assets/Data/ExperienceData.json";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <Box sx={useStyles.root}>
          <motion.div
          animate={useStyles.animate}
          initial={useStyles.initial}
          transition={useStyles.transition(1,1)}
          >
            <Typography sx={useStyles.TextBox} variant="h4">Experience</Typography>
          </motion.div>
      <Grid container sx={useStyles.Container}>
        
        <Grid item xs={10}>
          <Box>
            {ExpData.map((val, index) => {
              return (
                <Box key={index}>
                  <ExprerienceCard val={val} />
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#000000" ,color:"#ffffff"}}
          style={useStyles.buton} >View All </motion.button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
const useStyles = {
  root: {
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "100%",
    height: "120vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  Container: {
   justifyContent: "center",
   alignItems: "center",
   flexDirection: "column",
   width: { xs: "100%", md: "1080px" },
    height: "100%",
  },
  TextBox: {
   fontWeight: "bold",
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
buton:{
  width:"5rem",
  height:"2rem",
  backgroundColor:"#1684d3",
  color:"#ffffff",
  fontWeight:"bold",
  fontSize:"1rem",
  borderRadius:"5px",
}
};
