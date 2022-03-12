import React from 'react';
import './App.css';
const Deletemodal = (props) => {
	return (
		<div>
			<div className='modal fade' id='example2Modal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						{/* <div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Modal title
							</h5>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div> */}
						<div className='modal-body text-align-center'>
							<label>क्या आप इस सेक्शन को हटाना चाहते है ?</label>
						</div>
						<div className='modal-footer deleteModal'>
							<button type='button' className='btn btn-secondary deleteModal-cancel' data-bs-dismiss='modal'>
								कैंसल
							</button>

							<button type='button' className='btn btn-primary deleteModal-ok' onClick={props.ram}>
								ओके
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Deletemodal;
