import React from "react";
import {Stars, Sky} from '@react-three/drei'

function TimeofDay() {
    const time = new Date();
    //Dawn sunrise:
    if (time.getHours() >= 5 && time.getHours() <= 9) {
      return <Sky sunPosition={[1, 0, 0]} />;
    }
    //Mid day sun:
    else if (time.getHours() >= 10 && time.getHours() <= 17) {
      return <Sky sunPosition={[0, 1, 0]} />;
    }
    //Dusk sunset:
    else if (time.getHours() >= 18 && time.getHours() <= 20) {
      return <Sky sunPosition={[0, 0, 1]} />;
    }
    //Night time sky:
    else {
      return <Stars />;
    }
  }

  export default TimeofDay; 