import React, {useEffect, useState} from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif'

export default function ListOfGifs({keyword, limit, offset, rating, lang} = {}){
	const [gifs, setGifs] = useState([])

	useEffect(function (){
		console.log('Efecto ejecutado')
		getGifs({keyword, limit, offset, rating, lang})
			.then(gifs => setGifs(gifs))
	}, [keyword, limit, offset, rating, lang])

	return gifs.map(singleGif => 
		<Gif
			key={singleGif.id}
			title={singleGif.title} 
			id={singleGif.id} 
			url={singleGif.url}
		/>
	)
}
