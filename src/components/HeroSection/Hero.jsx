import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import HeroImage from "../../assets/image/frofile.png";
import TypingEffect from "./typingEffect";
import ContactLinks from "./ContactLinks";
import Links from "../../assets/Data/ContactLinks.json";
import { motion } from "framer-motion";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <>
      <Grid
        container
        columns={{ xs: 6, sm: 6, md: 12 }}
        className={styles.HeroGrid}
      >
        <Grid item xs={6} sx={HeroStyle.GridItem2}>
          <TypingEffect />
          <div className={styles.btnBox}>
            <a className={styles.btn} href=""> Hire Me</a>
            <a className={styles.btn} href="https://github.com/SUNNYKUMAR1232/CV/blob/main/122EE0372_SunnyKumar.pdf"> CV</a>
          </div>
          <ContactLinks Links={Links} />
        </Grid>
        <Grid item xs={6} sx={HeroStyle.GridItem1} className={styles.grid1}>
          <motion.div
            animate={HeroStyle.animate}
            initial={HeroStyle.initial}
            whileHover={{ scale: 1.1 }}
            transition={HeroStyle.transition}
            style={HeroStyle.HeroImageIcon}
          >
            <Image
              src={HeroImage}
              alt="hero"
              height={400}
              width={400}
              style={{ borderRadius: "50%" }}
              className={styles.HeroImageIcon}
            />
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
const HeroStyle = {
  GridItem1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  GridItem2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    gap: "2rem",
  },
  HeroImageIcon: {
    borderRadius: "50%",
    background: "rgba(126, 44, 141, 0.1)",
    backdropFilter: "blur(10px)",
    filter: "drop-shadow(0 0 0.5rem #2baee2)",
  },
  img: {
    borderRadius: "50%",
    height: "400px",
    width: "400px",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -20,
  },
  transition: {
    duration: 1,
    damping: 20,
    ease: "easeInOut",
  },
};
