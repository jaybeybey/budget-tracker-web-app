import React from "react";
import ReactNotifications from "react-notifications-component";

import "./App.css";
import 'react-notifications-component/dist/theme.css'


import Header from "./shared/components/layout/header"
import SideBar from "./shared/components/layout/sidebar";

const App = props => {
  return (
    <>
      <div className='notification'>
        <ReactNotifications />
      </div>
      <div className="row no-gutters h-100">
        <div className="col-xl-1 col-2">
          <SideBar />
        </div>
        <div className="col-xl-11 col-10">
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