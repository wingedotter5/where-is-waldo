import classes from "../styles/Frame.module.css";

const frame = {
  width: 60,
  height: 60,
};

const Frame = ({ mousePosition }) => {
  return (
    <div
      style={{
        width: `${frame.width}px`,
        height: `${frame.height}px`,
        left: `${mousePosition.xCor - frame.width / 2}px`,
        top: `${mousePosition.yCor - frame.height / 2}px`,
      }}
      className={classes.frame}
    ></div>
  );
};

export default Frame;
