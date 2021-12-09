import {Button} from "@mui/material";
import { useState } from "react";

const EventHandling = () => {
  let c = 0;

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("button was clicked");
    c++;
    setCount(count + 1);

    console.log(c);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Event Handling</h1>
      <hr />
      <h2>{c}</h2>
      <h2>{count}</h2>
      
      <Button color="primary" variant="contained"
       className="btn btn-primary" onClick={handleClick}>
        Click
      </Button>
      <button className="btn btn-danger" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};

export default EventHandling;