import React from 'react';

const Spinner = props => {
	return(
		<div className="loading-container">
			<div className='spinner-container' >
				<img src={'/assets/logo.png'} alt="Loading..."/>
			</div>
		</div>
	)
}

export default Spinner