import React from 'react';
import {Link, Route} from "wouter";
import './App.css';
import logo from './logo.png';
import ListOfGifs from './components/ListOfGifs';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <section className="App-content">
				<Link to='/'>
					<img className="App-logo" alt='Giffy logo' src={logo}/>
				</Link>
				<Route
					component={Home}
					path="/"/>
				<Route
					component={ListOfGifs}
					path="/search/:keyword"/>
				<Route
				component={Detail}
					path="/gif/:id"/>
			</section>
    </div>
  );
}

export default App;
