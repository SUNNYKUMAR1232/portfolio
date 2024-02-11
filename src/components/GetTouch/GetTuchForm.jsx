import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TextFields from "./TextField";
import { motion } from "framer-motion";

const GetTuchForm = () => {
  return (
    <motion.div
    animate={useStyles.animate}
    initial={useStyles.initial}
    transition={useStyles.transition(1,0.5)}
    style={useStyles.root}
    >
      <Paper elevation={1} >
        <Box sx={useStyles.form}>
          <TextFields icon={'ic:baseline-person'} placeholder={'Name'} />
          <TextFields icon={'fluent:mail-24-filled'} placeholder={'Email'}/>
          <TextFields icon={'ic:baseline-phone'} placeholder={'Phone'}/>
          <TextFields icon={'ic:baseline-person'} placeholder={'Name'}/>
          <TextField
            placeholder="Any Query"
            InputProps={{
              startAdornment: (
                <Box sx={useStyles.IconAndoment} position="start">
                  <Icon icon="ant-design:message-filled" />
                </Box>
              ),
            }}
            sx={useStyles.input}
            multiline
            rows={6}
          />
          <Box sx={useStyles.ButtonBox}>
            <motion.div 
            whileTap={{scale:0.9}}
            whileHover={{scale:1.1,backgroundColor:"#000000",color:"#ffffff",cursor:"pointer",boxShadow:"0px 0px 10px 0px #000000"}}
            style={useStyles.SubmitButton}>Submit</motion.div>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default GetTuchForm;
const useStyles = {
  root: {
    backgroundColor: "#ffffff",
    color: "#fff",
    width: "100%",
    height: "85vh",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    gap: "10px",
    padding: "20px",
  },
  SubmitButton: {
      width: "50%",
      height: "40px",
      borderRadius: "5px",
      backgroundColor: "#0798ff",
      color: "#000000",
      fontSize: "20px",
      fontWeight: "bold",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px 0px #0798ff",
      textAlign: "center",
      padding: "5px",
      
    
  },
  ButtonBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  IconAndoment: {
    color: "#000000",
    fontSize: { xs: "20px", md: "30px" },
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "35px",
    height: "100%",
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
  input:{
    width:{xs:"300px",md:"500px"},
  }
};
