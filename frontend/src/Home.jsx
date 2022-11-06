import React from "react";
import Welcome from "./components/Welcome";
import Translate from "./components/Translate";


const Home = (props) => {


  return (
    <div>
      <Welcome />
      <Translate id={props.id}/>
      <br />
    <br />
    </div>
  );
}

export default Home;