import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeroImage from "../../assets/image/hero-image.png";
import { motion } from "framer-motion";
const EducationCard = ({
  Name,
  Address,
  startDate,
  endDate,
  Description,
  Class,
  Present,
}) => {
  return (
    <motion.div
      animate={useStyles.animate}
      initial={useStyles.initial}
      whileHover={{ scale: 1.1 }}
      transition={useStyles.transition(1,1)}
    >
      <Paper elevation={2} sx={useStyles.root}>
        <Box sx={useStyles.Imagebox}>
          <Image src={HeroImage} width={150} height={150} alt="nmar" />
        </Box>
        <Box sx={useStyles.Boxs}>
          <Typography variant="h6">{Name.toUpperCase()}</Typography>
          <Typography variant="p">{Class}</Typography>
          <Typography variant="p">{Description}</Typography>
          <Typography variant="p">{Address}</Typography>
          <Box>
            <Typography variant="p">
              {startDate}
              {" - "}
              {endDate} {Present}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default EducationCard;
const useStyles = {
  root: {
    backgroundColor: "#ffffff",
    color: "#000000",
    width: { xs: "400px", md: "450px" },
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Imagebox: {
    height: "100%",
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e4e4d0",
  },
  Boxs: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    paddingLeft: "20px",
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
