import React from 'react';
import ReactNotifications from 'react-notifications-component';

import './App.css';

import Content from './shared/components/layout/Content'
import Header from './shared/components/layout/header'
import SideBar from './shared/components/layout/sidebar';

const App = props => {
  return (
    <>
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
    </>
  );
}

export default App;