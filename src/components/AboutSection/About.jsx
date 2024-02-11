import { Box, Button, Grid, Input, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeroImage from "../../assets/image/hero-image.png";
import DounloadButton from "./Dounload";
import { motion } from "framer-motion";
const About = () => {
  return (
    <Box sx={AdoutStyle.root}>
      <Grid
        container
        columns={{ xs: 6, sm: 6, md: 12 }}
        sx={AdoutStyle.Container}
      >
        <Grid item xs={6} sx={AdoutStyle.GridItem1}>
          <motion.div
            animate={AdoutStyle.animate}
            initial={AdoutStyle.initial}
            whileHover={{ scale: 1.1 }}
            transition={AdoutStyle.transition(1)}
            style={AdoutStyle.AboutImageIcon}
          >
            <Image src={HeroImage} alt="hero" width={300} height={300} />
          </motion.div>
        </Grid>
        <Grid item xs={6} sx={AdoutStyle.GridItem2}>
          <motion.div
            animate={AdoutStyle.animate}
            initial={AdoutStyle.initial}
            transition={AdoutStyle.transition(1)}
            style={AdoutStyle.GridItem3}
          >
            <motion.h1
              animate={AdoutStyle.animate}
              initial={AdoutStyle.initial}
              style={{ fontSize: "3rem" }}
              transition={AdoutStyle.transition(1, 0.5)}
            >
              Hi, I&apos;m <span style={{ color: "#4B6CC1" }}>Sunny</span>
            </motion.h1>
            <motion.h6
              animate={AdoutStyle.animate}
              initial={AdoutStyle.initial}
              transition={AdoutStyle.transition(2, 0.6)}
            >
              Full Stack Developer & UI/UX Designer
            </motion.h6>
            <motion.p
              animate={AdoutStyle.animate}
              initial={AdoutStyle.initial}
              transition={AdoutStyle.transition(3, 0.7)}
            >
              I&apos;m Sunny Kumar, a passionate Full Stack Developer and UI/UX
              Designer currently pursuing my studies at NIT Rourkela.
              <br />
              <span style={AdoutStyle.Span}>Full-Stack Developer:</span> Adept
              in building web applications from the ground up, proficient in
              front-end (e.g., React, Angular, Vue.js) and back-end technologies
              (e.g., Python, Node.js, Java).
              <br />
              <span style={AdoutStyle.Span}>UI/UX Designer:</span> Skilled in
              crafting user-centric interfaces that are both visually appealing
              and intuitive to use. Possesses a strong understanding of user
              research, interaction design, and visual design principles.
            </motion.p>
            <motion.p
              animate={AdoutStyle.animate}
              initial={AdoutStyle.initial}
              transition={AdoutStyle.transition(4, 0.8)}
            >
              Email:{" "}
              <span style={{ color: "#4B6CC1" }}>
                {" "}
                sunnykumar23232@gmail.com
              </span>
            </motion.p>
            <motion.p
              animate={AdoutStyle.animate}
              initial={AdoutStyle.initial}
              transition={AdoutStyle.transition(5, 0.9)}
            >
              Phone:{" "}
              <span style={{ color: "#4B6CC1" }}> +880 179 999 2323</span>
            </motion.p>
            <motion.p
              animate={AdoutStyle.animate}
              initial={AdoutStyle.initial}
              transition={AdoutStyle.transition(6, 1)}
            >
              Address: <span style={{ color: "#4B6CC1" }}> Patna, Bihar</span>
            </motion.p>
          </motion.div>
          <motion.div
            animate={AdoutStyle.animate}
            initial={AdoutStyle.initial}
            transition={AdoutStyle.transition(6, 1.2)}
            style={AdoutStyle.CVBox}
          >
            <DounloadButton url={""} name={"Resume"} ext={"png"} />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
const AdoutStyle = {
  root: {
    positive: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GridItem1: {
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "3rem",
    gap: "1rem",
    height: "100%",
    width: "100%",
  },
  GridItem2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "3rem",
    gap: "1rem",
    height: "100%",
    width: "100%",
  },
  GridItem3: {
    display: "flex",
    justifyContent: "flex-start ",
    flexDirection: "column",
    gap: "1rem",
  },
  AboutImageIcon: {
    borderRadius: "50%",
    backgroundColor: "#e4e4e4d0",
  },
  CVBox: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  Container: {
    width: { xs: "100%", md: "1080px" },
    height: "100%",
  },
  Span: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -20,
  },
  transition: (val, del) => [
    {
      duration: val,
      delay: del,
      damping: 20,
      ease: "easeInOut",
    },
  ],
};
