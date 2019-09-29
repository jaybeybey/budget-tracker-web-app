import React from 'react';
import ReactNotifications from 'react-notifications-component';

import Content from './shared/components/layout/Content'
import Header from './shared/components/layout/header'
import SideBar from './shared/components/layout/sidebar';

import './App.css';
import 'react-notifications-component/dist/theme.css'



const App = props => {
  return (
    <div className="app-container">
      <ReactNotifications />
      <div className='App' >
        <SideBar />
        <div className='main-container'>
          <Header />
          <Content>
            {props.children}
          </Content>
        </div>
      </div>
    </div>
  );
}

export default App;