import React from "react";
import ReactNotifications from "react-notifications-component";

import "./App.css";

import Header from "./shared/components/layout/header"
import SideBar from "./shared/components/layout/sidebar";

const App = props => {
  return (
    <>
      <ReactNotifications />
      <div className="row no-gutters">
        <div className="col-xl-1 col-sm-2 col-3">
          <SideBar />
        </div>
        <div className="col-xl-11 col-sm-10 col-9">
          <div className="main-container">
            <Header />
            <main className="graph-container">
              {props.children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;