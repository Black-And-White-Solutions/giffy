import React, {useState} from 'react';
import {Link, useLocation} from 'wouter';

const	POPULAR_GIFS = ["Slimes", "Matrix", "Minecraft", "Ubuntu"]

export default function Home () {
	const [keyword, setKeyword] = useState('')
	const [path, pushLocation] = useLocation()
	
	const handleSubmit = evt => {
		evt.preventDefault()
		//Navegar a otra ruta
		pushLocation(`/search/${keyword}`)
	}
	const handleChange = evt => {
		setKeyword(evt.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword}/>
			</form>
			<h3 className="App-title">Los Gifs mas populares</h3>
			<ul>
				{POPULAR_GIFS.map((popularGif) => (
					<li key={popularGif}>
						<Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
