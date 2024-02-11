import { Box } from "@mui/material";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
const ContactLinks = ({ Links }) => {
  return (
    <Box sx={ContactLinksStyle.ContactLinks}>
      {Links.map((item, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, damping: 40, ease: "easeInOut" }}
            key={index}
          >
            <Box sx={ContactLinksStyle.LinksBox}>
              <Link href={item.url}>
                <Icon icon={item.icon}></Icon>
              </Link>
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
};

export default ContactLinks;
const ContactLinksStyle = {
  ContactLinks: {
    display: "flex",
    gap: "2.5rem",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "6rem",
    padding: "1rem 1rem",
    color: "black",
    fontSize: "2.5rem",
  },
  LinksBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(145deg,  #fa0089, #31ab2d)",
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "black",
      fontSize: "3rem",
    },
  },
};
