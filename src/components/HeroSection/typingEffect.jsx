import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const TypingEffect = () => {
  return (
    <motion.div
    animate={TypingEffectStyle.animate}
    initial={TypingEffectStyle.initial}
    transition={TypingEffectStyle.transition}
    >
      <Typography variant="h1">
        <span style={TypingEffectStyle.text1}>Hi</span>
        , <br></br>I&apos;m{" "}
        <TypeAnimation
          sequence={["Sunny", 1000, " ", 1000]}
          wrapper="span"
          speed={50}
          style={TypingEffectStyle.Into}
          repeat={Infinity}
        />
      </Typography>
      <TypeAnimation
        sequence={["Web Developer", 1000, "UI/UX Designer", 1000]}
        wrapper="span"
        speed={50}
        style={TypingEffectStyle.Skill}
        repeat={Infinity}
      />
    </motion.div>
  );
};

export default TypingEffect;
const TypingEffectStyle = {
  Into: {
    background: "linear-gradient(145deg, #0afb02, #3007ff)",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
  },
  Skill: {
    fontSize: "2.5em",
    display: "inline-block",
    background: "linear-gradient(145deg, #02f3fb, #ff0707)",
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
  },
  animate:{
    opacity:1,
    y:0,
    
  },
  initial:{
    opacity:0,
    y:-20,
  },
  transition:{
    duration:1,
    damping:20,
    ease:"easeInOut",
  },
  text1:{
    color:'color-mix(in srgb-linear, #17fb02  , #2705d1 50%)',
    background:'linear-gradient(145deg, #fb0202, #3007ff)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
  }
};
