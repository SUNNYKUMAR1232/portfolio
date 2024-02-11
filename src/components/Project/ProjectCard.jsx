import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React, { use } from "react";
import HeroImage from "../../assets/image/hero-image.png";
import { motion } from "framer-motion";
const ProjectCard = () => {
  return (
    <motion.div
    animate={useStyles.animate}
    initial={useStyles.initial}
    whileHover={{scale:1.1}}
    transition={useStyles.transition(1,1)}
    >
      <Paper elevation={2}  sx={useStyles.root}>
        <Box sx={useStyles.Imagebox}>
          <Image src={HeroImage} width={200} height={200} alt="nmar" />
        </Box>
        <Box sx={useStyles.Boxs}>
          <Typography variant="h5">Name</Typography>
          <Typography variant="p">Description</Typography>
          <Box sx={useStyles.BoxView}>
            <motion.button
            animate={useStyles.animate}
            initial={useStyles.initial}
            transition={useStyles.transition(1,1)}
            whileTap={{scale:0.9}}
            whileHover={{scale:1.1,backgroundColor:"#000000",color:"#ffffff",cursor:"pointer",boxShadow:"0px 0px 10px 0px #000000"}}
            style={useStyles.Button}
            >
              Demo
            </motion.button>
            <motion.button
            animate={useStyles.animate}
            initial={useStyles.initial}
            transition={useStyles.transition(1,1)}
            whileTap={{scale:0.9}}
            whileHover={{scale:1.1,backgroundColor:"#000000",color:"#ffffff",cursor:"pointer",boxShadow:"0px 0px 10px 0px #000000"}}
            style={useStyles.Button}
            >
              Code
            </motion.button>
           
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default ProjectCard;
const useStyles = {
  root: {
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "300px",
    height: "300px",
  },
  Imagebox: {
    height: "60%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e4e4d0",
    float: "center",
  },
  Boxs: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingLeft: "20px",
  },
  BoxView: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
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
  Button:{
    width:"5rem",
    height:"2rem",
    backgroundColor:"#1684d3",
    color:"#ffffff",
    fontWeight:"bold",
    borderRadius:"10px",
    border:"none",
  }
};
