import React, { Component } from 'react';
import { Sidebar } from './components/Sidebar';
import { MessageList } from './components/MessageList';
import { AddMessage } from './components/AddMessage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessageList />
          <AddMessage />
          </section>
      </div>
    );
  }
}

export default App;
