import { useContext } from "react";
import { NameContext } from "../global/GlobalState";

const About = () => {
  const { counter, setCounter } = useContext(NameContext);

  const reduceCount = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>This is the About Page {counter} </h1>
      <button onClick={reduceCount}>Reduce Count</button>
    </div>
  );
};

export default About;
