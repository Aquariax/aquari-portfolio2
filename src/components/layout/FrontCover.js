import React from 'react';

function FrontCover() {
	return (
		<div className='front'>
			<div className='front_card'>
				<div className='front_card_face' id='front'>
					<p className='corner' id='topCorner'>
						A
					</p>
					<div className='card_text'>
						<p id='name'>Aquari Designs</p>
						<p>(Robert Harris)</p>
						<p id='title'>Web Designer, Developer, & Programmer</p>
					</div>
					<p className='corner' id='bottomCorner'>
						D
					</p>
				</div>
				<div className='front_card_face' id='back'>
					<div className='logo'>
						<p className='logo_text'>A</p>
						<p className='logo_text'>D</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FrontCover;
