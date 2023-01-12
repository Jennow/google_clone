import React from 'react';

const Footer = () => {
	return (
		<div className='Footer'>
			<div className='location'>Schweiz</div>
			<div className='environment'>CO₂-neutral seit 2007</div>
			<div className='links'>
				<div className='left'>
					<a className='text'>Über Google</a>
					<a className='text'>Werbeprogramme</a>
					<a className='text'>Unternehmen</a>
					<a className='text'>Wie funktioniert die Google Suche?</a>
				</div>
				<div className='right'>
					<a className='text'>Datenschutzerklärung</a>
					<a className='text'>Nutzungsbedingungen</a>
					<a className='text'>Einstellungen</a>
				</div>{' '}
			</div>
		</div>
	);
};

export default Footer;
