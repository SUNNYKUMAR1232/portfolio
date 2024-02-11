import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <Box sx={useStyles.root}>
        <motion.div
        animate={useStyles.animate}
        initial={useStyles.initial}
        transition={useStyles.transition(1,0.5)}
         style={useStyles.TextBox}>
            <Typography variant="h4">Education</Typography>
        </motion.div>
      <Box  sx={useStyles.Container}>
        
            <EducationCard
              Name={"High school Maudah"}
              Class={"Maticulation"}
              startDate={"2018"}
              endDate={"2019"}
              Description={"Percentage:74.3"}
              Address={"Maudah Vaishali Bihar"}
            />
         
            <EducationCard
                Name={"DR.L.K.V.D College"}
              Class={"Intermediate"}
              startDate={"2017"}
              endDate={"2019"}
              Description={"Percentage:74.6"}
              Address={"Tajpur Samastipur Bihar"}
           />
            <EducationCard
                Name={"NIT Rourkela"}
              Class={"B.Tech"}
              startDate={"2022"}
              endDate={"Present"}
              Description={"CGP:8.5"}
              Address={"NIT Rourkela"}
            />
         
      </Box>
    </Box>
  );
};

export default Education;
const useStyles = {
  root: {
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  GridStyle: {
    width: "100%",
    height: "100%",
    
  },

  Container: {
    width: { xs: "100%", md: "1080px" },
    height: "100%",
    display: { xs: "flex", md: "Grid" },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    
  },
  TextBox: {
    textAlign: "center",
    width: "100%",
    height: "3rem",
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
// Compare this snippet from src/components/GetTouch/GetTouch.jsx:
