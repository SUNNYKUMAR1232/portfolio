import { Box, Typography } from "@mui/material";
import React, { use, useEffect } from "react";
import SkillCard from "./SkillCard";
import SkillData from "../../assets/Data/Skills.json";
import { motion } from "framer-motion";
const Skill = () => {
  return (
    <Box sx={SkillStyle.root}>
        <motion.h4
        animate={SkillStyle.animate}
        initial={SkillStyle.initial}
        transition={SkillStyle.transition(1,0.5)}
        style={SkillStyle.text}>Skills</motion.h4>
      <Box sx={SkillStyle.Container}>
          <Box sx={SkillStyle.common}>
            {SkillData.filter(
              (val, index, arr) => val.Type === "Programming Languages"
            ).map((val, index, arr) => {
              if (index === 0) {
                return (
                  <SkillCard
                    key={index}
                    Element={arr}
                    Name={"Programming Languages"}
                  />
                );
              }
            })}
          </Box>
          <Box sx={SkillStyle.common}>
            {SkillData.filter((val, index, arr) => val.Type === "Technologies").map(
              (val, index, arr) => {
                if (index === 0) {
                  return (
                    <SkillCard key={index} Element={arr} Name={"Technologies"} />
                  );
                }
              }
            )}
          </Box>
          <Box sx={SkillStyle.common}>
            {SkillData.filter((val, index, arr) => val.Type === "Databases").map(
              (val, index, arr) => {
                if (index === 0) {
                  return <SkillCard key={index} Element={arr} Name={"Databases"} />;
                }
              }
            )}
          </Box>
          <Box sx={SkillStyle.common}>
            {SkillData.filter(
              (val, index, arr) => val.Type === "Cloud Services"
            ).map((val, index, arr) => {
              if (index === 0) {
                return (
                  <SkillCard key={index} Element={arr} Name={"Cloud Services"} />
                );
              }
            })}
          </Box>
          <Box sx={SkillStyle.common}>
            {SkillData.filter(
              (val, index, arr) => val.Type === "UI/UX Designing"
            ).map((val, index, arr) => {
              if (index === 0) {
                return (
                  <SkillCard key={index} Element={arr} Name={"UI/UX Designing"} />
                );
              }
            })}
          </Box>
          <Box sx={SkillStyle.common}>
            {SkillData.filter((val, index, arr) => val.Type === "Libraries").map(
              (val, index, arr) => {
                if (index === 0) {
                  return <SkillCard key={index} Element={arr} Name={"Libraries"} />;
                }
              }
            )}
          </Box>
      </Box>
    </Box>
  );
};

export default Skill;
const SkillStyle = {
  root: {
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "100%",
    height: "140vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  Container: {
    width: { xs: "100%", md: "1080px" },
    height: "100%",
    backgroundColor: "#ffffff",
    color: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    marginTop: "25px",

  },
  common: {
    width: "90%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    color: "#000000",
    fontWeight: "bold",
    fontSize: "2.2rem",
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
