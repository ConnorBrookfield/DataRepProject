import React from 'react';
import MainContent from './components/mainContent';
import AddAlbum from './components/addAlbum';
import EditAlbum from "./components/editAlbum";
import MyAlbums from './components/myAlbums';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="navbar-dark bg-dark" bg="primary">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addAlbum">Add Album</Nav.Link>
            <Nav.Link href="/myAlbums">My Albums</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
        <Route exact path='/' component={MainContent}/>
          <Route exact path='/addAlbum' component={AddAlbum}/>
          <Route exact path='/myAlbums' component={MyAlbums}/>
          <Route exact path='/editAlbum' component={EditAlbum}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
