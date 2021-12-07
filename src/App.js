import React from "react";

import ThemeProvider from "./ThemeProvider";
import FunctionContextComponent from "./FunctionContextComponent";

const App = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
};

export default App;
