import { Box } from "@mui/material";
import React from "react";
import LinkData from "../../assets/Data/LinkData.json";
import LinkItems from "./LinkItems";
import styles from "./nav.module.css";
const ListMenuItem = () => {
  return (
    <Box className={styles.listBox}>
      {LinkData.map((val, index) => {
        return (
          <Box key={index} className={styles.listItem}>
            <LinkItems val={val} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ListMenuItem;
