import React from 'react';
import './styles.css';

export default function Gif ({title, id, url}) {
	return <a href={`#${id}`} className='Gif'>
		<img alt={title} src={url}/>
		<div className='title'>{title}</div>
	</a>
}

