import React, { useState } from 'react';
import Modal from './Modal';
import Upload from './Upload';
import hello from './Images/delete.png';
import { AiOutlinePlus } from 'react-icons/ai';
import './App.css';
import Deletemodal from './Deletemodal';

const BankDetails = () => {
	const [inputs, setInputs] = useState([{ id: 1, value: '' }]);

	const onAddRow = () => {
			const maxId = Math.max(...inputs.map(({ id }) => id));
			setInputs([...inputs, { id: maxId + 1 }]);
		},
		onRowRemove = (idToDelete) => setInputs(inputs.filter(({ id }) => id != idToDelete));
	return (
		<>
			<div className='container mt-5'>
				<div className='d-flex'>
					<div className='number'>
						<span className='number-alignment'>2</span>
					</div>
					<div className='heading'>
						<h4>बैंक विवरण</h4>
					</div>
				</div>

				{inputs.map(({ id, index }) => {
					return (
						<div key={id} className='mt-5' style={{ marginBottom: '40px' }}>
							<div className='d-flex mt-3 justify-content-between'>
								<div className='bank-circle text-center'>{id}</div>

								<div className='border-bank mt-3'></div>
								{id == 1 ? null : (
									<div>
										<button className='delete-button' data-bs-toggle='modal' data-bs-target='#example2Modal'>
											<Deletemodal ram={() => onRowRemove(id)} />
											<img src={hello} alt='' width='25px' height='25px' />
										</button>
									</div>
								)}
							</div>

							<form className='row g-3 mt-3 mb-3'>
								<div className='col-md-6 col-12'>
									<label htmlFor='inputEmail4' className='form-label'>
										आइएफईसी कोड (IFSC Code)
									</label>
									<input type='text' className='form-control' id='inputEmail4' placeholder='आईएफएसी कोड लिखे' />
								</div>
								<div className='col-md-6 col-12'>
									<label htmlFor='inputPassword4' className='form-label'>
										बैंक /शाखा नाम (Bank/Branch Name)
									</label>
									<input type='text' className='form-control' id='inputPassword4' placeholder='बैंक/ शाखा का नाम लिखे' />
								</div>
								<div className='col-md-6 col-12'>
									<label htmlFor='inputPassword4' className='form-label'>
										खाताधारक का नाम (Account Holder Name)
									</label>
									<input type='text' className='form-control' id='inputPassword4' placeholder='खाताधारक का नाम लिखे' />
								</div>
								<div className='col-md-6 col-12'>
									<label htmlFor='inputPassword4' className='form-label'>
										खाता संख्या (Account Number)
									</label>
									<input type='number' className='form-control' id='inputPassword4' placeholder='खाता संख्या लिखे' />
								</div>
							</form>

							<Upload head='अपलोड बैंक संबंधित डाक्यूमेंट्स' />
							<div className='d-flex justify-content-between mt-3'>
								<div className='border-bank mt-3'></div>
								<div>
									<button className='add-document float-end' onClick={() => onAddRow()}>
										<AiOutlinePlus size='18px' />
										बैंक जोड़े
									</button>
								</div>
							</div>
							<Modal />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default BankDetails;
