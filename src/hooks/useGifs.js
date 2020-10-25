import React, {useEffect, useState} from 'react';
import getGifs from '../services/getGifs'

export function useGifs ({keyword}) {
	/*const {keyword, limit, offset, rating, lang} = params*/
	const [loading, setLoading] = useState(false)
	const [gifs, setGifs] = useState([])

	useEffect(function (){
		setLoading(true)

		getGifs({keyword})
			.then(gifs => {
				setGifs(gifs)
				setLoading(false)	
			})
	}, [keyword/*, limit, offset, rating, lang*/])

	return {loading, gifs}
}
