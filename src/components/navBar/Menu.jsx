import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ListMenuItem from "./ListMenuItem";
import { Icon } from "@iconify/react";
import styles from "./nav.module.css";
import SwitchComponent from "./switch";

const Menu = ({ showMenuHandler }) => {
  const [theme, setTheme] = useState("light" || "dark");
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <Box className={styles.menuItemBox}>
      <Button onClick={showMenuHandler}>
        <Icon
          icon="line-md:menu-to-close-alt-transition"
          className={styles.menuIcon}
        ></Icon>
      </Button>
      <Box>
        <ListMenuItem />
      </Box>
      <Box>
       <SwitchComponent changeTheme={changeTheme} onClick={changeTheme} theme={theme}/>
      </Box>
    </Box>
  );
};

export default Menu;
