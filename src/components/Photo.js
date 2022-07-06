import { useState } from "react";
import photo from "../assets/photo.jpg";
import classes from "../styles/Photo.module.css";
import Frame from "./Frame";
import Options from "./Options";

const Photo = () => {
  const [mousePosition, setMousePosition] = useState({ xCor: 0, yCor: 0 });
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={classes.photo}>
      <img
        src={photo}
        alt="characters"
        onClick={(e) => {
          setMousePosition({
            xCor: e.pageX,
            yCor: e.pageY,
          });
          setShowOptions(true);
        }}
      />
      {showOptions && (
        <Options
          mousePosition={mousePosition}
          options={[
            { label: "One", id: "one" },
            { label: "Two", id: "Two" },
            { label: "Three", id: "three" },
            { label: "Four", id: "four" },
          ]}
        />
      )}
      {showOptions && <Frame mousePosition={mousePosition} />}
    </div>
  );
};

export default Photo;
