// rce --> react class export Component 
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";

// import "~bootstrap/scss/bootstrap";

/* The following line can be included in your src/index.js or App.js file */

// import './App.scss'   //@ tha starting me 

// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Nvbar from './components/Nvbar';

export class App extends Component {
  render() {       //here render function returns a JSX component
    return (
        
        <BrowserRouter>
        <Nvbar/>
        <Routes>
        <Route path='/' element={<News pageSize={5} category="general" country="us"/>} />
        <Route path='bussiness' element={<News pageSize={5} category="bussiness" country="us"/>} />
        <Route path='entertainment' element={<News pageSize={5} category="entertainment" country="us"/>} />
        <Route path='health' element={<News pageSize={5} category="health" country="us"/>} />
        <Route path='science' element={<News pageSize={5} category="science" country="us"/>} />
        <Route path='sports' element={<News pageSize={5} category="sports" country="us"/>} />
        <Route path='technology' element={<News pageSize={5} category="technology" country="us"/>} />


              {/* <Route path='/'  />

              <Route exact path='/bussiness' />{<News key="bussiness" pageSize={5} category="bussiness" country="us"/>}</Route>
              <Route exact path='/entertainment' />{<News key="entertainment" pageSize={5} category="entertainment" country="us"/>}</Route>
              <Route exact path='/health' />{<News key="health" pageSize={5} category="health" country="us"/>}</Route>
              <Route exact path='/science' />{<News key="science" pageSize={5} category="science" country="us"/>}</Route>
              <Route exact path='/sports' />{<News key="sports" pageSize={5} category="sports" country="us"/>}</Route>

              <Route exact path='/technology' /> element={<News key="technology" pageSize={5} category="technology" country="us"/>}</Route> */}
        </Routes>
        </BrowserRouter>
    )
  }
}

export default App
