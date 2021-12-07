import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeProvider";

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? "black" : "grey",
    color: darkTheme ? "white" : "black",
    padding: "10px",
    border: "1px solid black",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>FunctionContextComponent</div>
    </>
  );
};
export default FunctionContextComponent;
