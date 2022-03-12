import React from 'react';
import FarmDetails from './FarmDetails';

const KrishiCheckbox = () => {
	return (
		<>
			<div className='container mt-5'>
				<div className='d-flex'>
					<div className='number'>
						<span className='number-alignment'>3</span>
					</div>
					<div className='heading'>
						<h4>आप कृषि सम्बंधित कौन कौन से व्यवसाय करते है?</h4>
					</div>
				</div>

				<div class='row justify-content-around my-3'>
					<div class='col-3'>
						<div className='form-check'>
							<input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
							<label className='form-check-label' for='flexCheckDefault'>
								नहीं करते है
							</label>
						</div>
					</div>
					<div class='col-3'>
						<div className='form-check'>
							<input className='form-check-input' type='checkbox' value='' id='flexCheckChecked' />
							<label className='form-check-label' for='flexCheckChecked'>
								खेती
							</label>
						</div>
					</div>
					<div class='col-3'>
						<div className='form-check'>
							<input className='form-check-input' type='checkbox' value='' id='flexCheckChecked' />
							<label className='form-check-label' for='flexCheckChecked'>
								अन्य
							</label>
						</div>
					</div>
				</div>
			</div>
			<FarmDetails />
		</>
	);
};

export default KrishiCheckbox;
