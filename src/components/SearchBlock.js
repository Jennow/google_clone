import React from 'react';

const SearchBlock = () => {
	return (
		<div className='SearchBlock'>
			<div className='logo'>
				<img
					alt='Google Logo'
					src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'></img>
			</div>

			<div className='SearchBar'>
				<input type='text'></input>
			</div>
			<div className='buttons'>
				<a className='btn'>Google Suche</a>
				<a className='btn'>Auf gut Glück!</a>
			</div>
			<div className='countries'>
				<p>
					Google angeboten auf:
					<a className='text'>English</a>
					<a className='text'>Français</a>
					<a className='text'>Italiano</a>
					<a className='text'>Rumantsch</a>
				</p>
			</div>
		</div>
	);
};

export default SearchBlock;
