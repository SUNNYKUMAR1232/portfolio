import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import styles from "../navBar/nav.module.css";

const LinkItems = ({ val }) => {
  return (
    <div className={styles.itemBox}>
      <a href={val.path} className={styles.link}>
        <Icon icon={val.icon} className={styles.icon} />
        <p className={styles.text}>{val.name}</p>
      </a>
    </div>
  );
};

export default LinkItems;
