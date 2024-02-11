import { Box } from "@mui/system";
import React, { use } from "react";
import ProjectCard from "./ProjectCard";
import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <Box sx={useStyles.root}>
        <motion.div
        animate={useStyles.animate}
        initial={useStyles.initial}
        transition={useStyles.transition(1,0.5)}
        style={useStyles.TextBox}>
          <Typography variant="h4" sx={useStyles.Text}>
            Projects
          </Typography>
        </motion.div>
      <Grid container columns={{ xs: 12, sm: 4, md: 12 }} spacing={4} sx={useStyles.Container}>
        <Grid sx={4} item>
          <ProjectCard />
        </Grid>
        <Grid item sx={6}>
          <ProjectCard />
        </Grid>
        <Grid item sx={6}>
          <ProjectCard />
        </Grid>
        <Grid sx={6} item>
          <ProjectCard />
        </Grid>
        <Grid item sx={6}>
          <ProjectCard />
        </Grid>
        <Grid item sx={6}>
          <ProjectCard />
        </Grid>
        <Grid sx={6} item>
          <ProjectCard />
        </Grid>
        <Grid item sx={6}>
          <ProjectCard />
        </Grid>
        <Grid item sx={6}>
          <ProjectCard />
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Project;
const useStyles = {
  root: {
    backgroundColor: "#ffffff",
    color: "#fff",
    width: "100%",
    height: "120vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    
    flexDirection: "column",
  },
  GridStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: "10px",
  },
  Container: {
    width: { xs: "100%", md: "1080px" },
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap:{xs:"3rem",md:"2rem"},
    scrollBehavior: "smooth",
    overflowY: "scroll",
    overflowX: "hidden",
    scrollbarWidth: "1rem",
    scrollbarColor: "#000000",
    "&::-webkit-scrollbar": {
      width: "1rem",
    },
    marginTop: "1rem",

  },
  Text: {
    color: "#000000",
    fontWeight: "bold",
  },
  TextBox: {
    textAlign: "center",
    width: "100%",
    height: "3.5rem",
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
// Compare this snippet from src/components/Experience/ExperienceCard.jsx:
