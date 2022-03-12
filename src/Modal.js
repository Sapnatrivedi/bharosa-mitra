import React, { useState } from 'react';
import close from './Images/close.png';
import document from './Images/document.png';


function Modal() {
	const [inputList, setInputList] = useState([{ firstName: '', lastName: '' }]);

	// handle input change
	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputList];
		list[index][name] = value;
		setInputList(list);
	};

	// handle click event of the Remove button
	const handleRemoveClick = (index) => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
	};

	// handle click event of the Add button
	const handleAddClick = () => {
		setInputList([...inputList, { firstName: '', lastName: '' }]);
	};

	return (
		<>
			<div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<div className='d-flex'>
								<img src={document} style={{ width: '30px', height: '30px' }} alt=' is not' />
								<div>
									<label className='modal-title' id='exampleModalLabel'>
										अपलोड डाक्यूमेंट्स
									</label>
								</div>
							</div>
							<button type='button' className='close-button' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>

						<div className='modal-body'>
							{inputList.map((x, i) => {
								return (
									<>
										<div className='row'>
											<div className='mb-3 col-md-5 col-5'>
												<label htmlFor='inputState' className='form-label '>
													डाक्यूमेंट का प्रकार{' '}
												</label>
												<select name='firstName' id='inputState' className='form-select' value={x.firstName} onChange={(e) => handleInputChange(e, i)}>
													<option defaultValue>voter ID</option>
													<option>passbook</option>
													<option>pencard</option>
												</select>
											</div>
											<div className='mb-3 col-md-6 col-6'>
												<label className='form-label'> अपलोड संबंधित डाक्यूमेंट्स</label>

												<input id='choose-file' name='lastName' type='file' className='form-control' value={x.lastName} onChange={(e) => handleInputChange(e, i)} />
											</div>
											<div className='col-md-1 col-1'>{inputList.length !== 1 && <img src={close} className='' onClick={() => handleRemoveClick(i)} style={{ width: '10px', height: '10px' }} alt='not available' />}</div>
										</div>
										{/* <input name='firstName' placeholder='Enter First Name' value={x.firstName} onChange={(e) => handleInputChange(e, i)} /> */}
										{/* <input className='ml10' name='lastName' placeholder='Enter Last Name' value={x.lastName} onChange={(e) => handleInputChange(e, i)} /> */}
										<div className='modal-body'>
											<div className='d-flex justify-content-between'>
												<div className='stylus1'></div>
												<div>
													{inputList.length - 1 === i && (
														<button type='button' className='add-document' onClick={handleAddClick}>
															+ डाक्यूमेंट जोड़े
														</button>
													)}
												</div>
											</div>
										</div>
									</>
								);
							})}
						</div>
						<div className='container modal-footer'>
							<button type='button' className='ok-button mt-2 mb-2'>
								ओके
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
