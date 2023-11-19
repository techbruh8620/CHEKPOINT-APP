import React, { Fragment } from "react";
import MainNav from "./components/MainNav";
import AppLists from "./components/AppLists";
function App() {
  return (
    <Fragment>
      <MainNav />
      <AppLists />
    </Fragment>
  );
}

export default App;
