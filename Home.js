import React from "react";
import Button from "react-bootstrap/Button";
import NavbarHeader from "../NavBar/NavbarHeader";
import classes from "./Home.module.css";
import TourList from "./TourList";

const Home = () => {
  return (
    <React.Fragment>
      <NavbarHeader></NavbarHeader>
      <section className={classes["recent-album-section"]}>
        <h1 className={classes.brand}>The generics</h1>
        <Button className={classes["recent-album-bttn"]}>
          Get our Latest Album
        </Button>
      </section>
      <TourList></TourList>
    </React.Fragment>
  );
};

export default Home;
