import React, { useState } from "react";
import View from "../backgroundView";
import Calculator from "../calculator";
import { Container } from "../Container";
const Home = () => {


  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>

      <Calculator />
    </Container>
  );
};

export default Home;
