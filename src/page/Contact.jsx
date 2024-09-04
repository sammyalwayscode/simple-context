import { useContext } from "react";
import { NameContext } from "../global/GlobalState";

const Contact = () => {
  const { myName } = useContext(NameContext);
  return (
    <div>
      <h1>This is the contact Page: {myName}</h1>
    </div>
  );
};

export default Contact;
