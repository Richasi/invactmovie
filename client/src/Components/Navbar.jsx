import React from "react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      
      <div>
      <Text fontWeight="bold">INVACT</Text>
      </div>
      <Flex gap={5}>
        <Link style={{ textDecoration: "none", color: "blue", fontSize:"xl", fontWeight:"blue" }} to="/">
          Movies
        </Link>
        <Link style={{textDecoration: "none", color: "blue", fontSize:"xl", fontWeight:"bold" }} to="/watchlist">
          WatchList
        </Link>
        
      </Flex>
    </div>
  );
};

export default Navbar;
