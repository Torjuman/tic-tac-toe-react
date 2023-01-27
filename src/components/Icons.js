import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      <FaRegCircle className="icons" />;
      break;

    case "cross":
      <FaTimes className="icons" />;
      break;

    default:
      <FaPen className="icons" />;
      break;
  }
};

export default Icon;
