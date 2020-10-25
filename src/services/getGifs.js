import React from 'react';

const apiKey = 'ET6ICYhHuMufoUIzLdMGRy4hBH8BJn8d'

export default function getGifs(
	{keyword = 'gipfy', limit = '10', offset = '0', rating = 'G', lang = 'en'} = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
	console.log(apiURL)
	return fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const {data = []} = response
			if (Array.isArray(data)){
				const gifs = data.map(image => {
					const {title, id} = image
					const {url} = image.images.fixed_width
					return {title, id, url}
				})
				return gifs
			}
	})
}
