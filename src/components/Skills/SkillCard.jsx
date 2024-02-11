import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const SkillCard = ({ Name, Element, width, height}) => {
  return (
      <motion.div 
      animate={useStyles.animate}
      initial={useStyles.initial}
      whileHover={{scale:1.1}}
      transition={useStyles.transition(1,1)}
      style={useStyles.root}>
          <Paper elevation={2} sx={useStyles.Paper}>
            <Box>
              <Typography variant="h5" color={'black'}>{Name}</Typography>
            </Box>
            <Box sx={useStyles.ImageBox}>
              {Element.map((item, index) => {
                return (
                  <Box key={index}>
                    <img
                      src={item.icon}
                      width={width}
                      height={height}
                      alt={Element.name}
                      title={item.name}
                    />
                  </Box>
                );
              })}
            </Box>
          </Paper>
      </motion.div>
  );
};

export default SkillCard;
const useStyles = {
    root: {
        backgroundColor: "#ffffff",
        color: "#000000",
        width:"100%",
       
    },
    Paper: {
        width:"100%",
        height:"8rem",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
    },
    ImageBox:{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    animate: {
      opacity: 1,
      y: 0,
      scale:1,
    },
    initial: {
      opacity: 0,
      y: -20,
      scale:0.5,
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

