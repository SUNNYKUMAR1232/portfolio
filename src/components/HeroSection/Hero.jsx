import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import HeroImage from "../../assets/image/frofile.png";
import TypingEffect from "./typingEffect";
import ContactLinks from "./ContactLinks";
import Links from "../../assets/Data/ContactLinks.json";
import { motion } from "framer-motion";
import styles from "./hero.module.css";
import Particles from "..//..//features/particles";
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
        <Particles />
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
    background: "rgba(126, 44, 141, 0.01)",
    backdropFilter: "blur(5px)",
    
  },
  img: {
    borderRadius: "50%",
    height: "350px",
    width: "350px",
  },

};
