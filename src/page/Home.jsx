import { useContext } from "react";
import { NameContext } from "../global/GlobalState";

const Home = () => {
  const { myName, counter, setCounter } = useContext(NameContext);
  console.log(myName);

  const increaseCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>This is the Home page {counter} </h1>
      my Name is {myName}
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
};

export default Home;
