import React from 'react';
import {Link, Route} from "wouter";
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
				<Link to='/gif/slime rancher'>Gifs de Slime Rancher</Link>
				<Route
					component={ListOfGifs}
					path="/gif/:keyword"/>
			</section>
    </div>
  );
}

export default App;
