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
              <Link href={item.path}>
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
    fontSize: "2.0rem",
  },
  LinksBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(126, 44, 141, 0.1)",
    width: "3.0rem",
    height: "3.0rem",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "rgba(126, 44, 141, 0.3)",
      fontSize: "2.3rem",
    },
  },
};
