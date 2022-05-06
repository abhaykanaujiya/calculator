import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  bottom: 30%;
  left: 10%;
  top: 10%;
  position: absolute;
  height: 70vh;
  width: 45vh;
  background-color: black;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 7px 5px 5px 0px rgba(50, 50, 50, 0.75);

  .wrapper {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;
  }
  .screen {
    grid-column: 1 / -1;
    color: white;
    text-align: right;
    padding: 0.5rem;
    font-size: 4rem;
    overflow: hidden;
  }
  .btn {
    display: grid;
    place-content: center;
    background-color: rgb(54, 52, 52);
    border-radius: 5%;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 1rem;
  }
  .btn:hover {
    background-color: Conic Gradients (red, blue);
  }

  .light-gray {
    background-color: Conic Gradients (white, yellow,red);
    /* color: black; */
    
  }
  .zero {
    grid-column: 1 / span 2;
    border-radius: 25px;
    place-content: unset;
    align-items: center;
    padding-left: 2rem;
  }
`;