import React, { use, useEffect, useState } from "react";
import LinkItems from "./LinkItems";
import linkData from "../../assets/Data/LinkData.json";
import styles from "../navBar/nav.module.css";
import { Box, Button } from "@mui/material";
import Menu from "./Menu";
import { Icon } from "@iconify/react";
import ProgressBar from "./progressBar";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Box>
        <Box className={styles.navcontainer}>
          {linkData.map((val, index) => {
            return (
              <div key={index} className={styles.navItemBox}>
                <LinkItems val={val} className={styles.item} />
              </div>
            );
          })}
          <ProgressBar />
        </Box>
        {showMenu ? (
          <Menu showMenuHandler={showMenuHandler} />
        ) : (
          <Box className={styles.menuBox}>
            <Button onClick={showMenuHandler}>
              <Icon
                icon="line-md:menu-unfold-right"
                className={styles.menuIcon}
              ></Icon>
            </Button>
            <ProgressBar />
          </Box>
        )}
      </Box>
    </>
  );
};

export default NavBar;
