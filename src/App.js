import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

//components
import Home from './components/pages/Home/Home'
import Characters from './components/pages/Characters/Characters';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <div className="App">
      <Navbar openSidebar={openSidebar} />
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <Switch>
        <Route path="/" exact>
          <Home isSidebarOpen={isSidebarOpen} />
        </Route>

        <Route path="/character">
          <Redirect to="/Albedo" />
        </Route>

        <Route path="/:characterNameParam">
          <Characters />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
