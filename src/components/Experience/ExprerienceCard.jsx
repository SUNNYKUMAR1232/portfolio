"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
const ExprerienceCard = ({ val }) => {
  return (
    <>
      <motion.div
      animate={useStyles.animate}
      initial={useStyles.initial}
      whileHover={{scale:1.1}}
      transition={useStyles.transition(1,1)}
      >
        <Box sx={useStyles.root}>
          <Typography sx={useStyles.companyName} variant="p">
            {val.company}
          </Typography>

          <Box>
            <Typography sx={useStyles.role} variant="p">
              {" "}
              {val.role}
            </Typography>{" "}
            |
            <Typography sx={useStyles.type} variant="p">
              {" "}
              {val.type}
            </Typography>
          </Box>

          <Typography sx={useStyles.date} variant="p">
            {" "}
            {val.startDate}-{val.endDate}
          </Typography>
        </Box>
      </motion.div>
    </>
  );
};

export default ExprerienceCard;
const useStyles = {
  root: {
    backgroundColor: "#ff7700",
    color: "#000000",
    width: { xs: "300px", md: "500px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100px",
    boxShadow: "0px 0px 1px 0px #000000",
    borderRadius: "5px",
    paddingLeft: "20px",
    alignItems: "center",
  },
  companyName: {
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  role: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  type: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  date: {
    fontSize: "0.9rem",
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
