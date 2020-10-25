import React, {useEffect, useState} from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

export default function ListOfGifs ({params}) {
	const {keyword, limit, offset, rating, lang} = params
	const [loading, setLoading] = useState(false)
	const [gifs, setGifs] = useState([])

	useEffect(function (){
		setLoading(true)
		getGifs({keyword, limit, offset, rating, lang})
			.then(gifs => {
				setGifs(gifs)
				setLoading(false)	
			})
	}, [keyword, limit, offset, rating, lang])

	if (loading) return <i>Cargando</i>

	return <div>
	  {
			gifs.map(singleGif => 
				<Gif
					key={singleGif.id}
					title={singleGif.title} 
					id={singleGif.id} 
					url={singleGif.url}
				/>
			)
		}
	</div>
}
