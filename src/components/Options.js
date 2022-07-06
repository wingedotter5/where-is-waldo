import classes from "../styles/Options.module.css";

const Options = ({ options, mousePosition }) => {
  return (
    <ul
      className={classes.options}
      style={{
        left: `${mousePosition.xCor + 40}px`,
        top: `${mousePosition.yCor - 40}px`,
      }}
    >
      {options.map((option) => (
        <li key={option.id}>{option.label}</li>
      ))}
    </ul>
  );
};

export default Options;
