import React from 'react';
import './App.css';
import './container.css';
import Modal from './Modal';
import Upload from './Upload';
import { useForm } from 'react-hook-form';

const Personalinfo = () => {
	return (
		<>
			<div className='container my-5'>
				<div className='d-flex'>
					<div className='number'>
						<span className='number-alignment'>1</span>
					</div>

					<div className='heading'>
						<h4>
							व्यक्तिगत विवरण
							<small>(आधारकार्ड के अनुसार )</small>
						</h4>
					</div>
				</div>
				<form className='row g-3 mt-3 mb-3'>
					<div className='col-md-6 col-6'>
						<label htmlFor='inputEmail4' className='form-label'>
							नाम *
						</label>
						<input type='text' className='form-control' id='inputEmail4' placeholder='अपना नाम लिखे' />
					</div>
					<div className='col-md-6 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							आधारकार्ड नंबर *
						</label>
						<input type='number' className='form-control' id='inputPassword4' placeholder='आधार कार्ड नंबर लिखे' />
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							समग्र आईडी
						</label>
						<input type='number' className='form-control' id='inputPassword4' placeholder='समग्र आईडी लिखे' />
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							मोबाइल नंबर *
						</label>
						<input type='number' className='form-control' id='inputPassword4' placeholder='मोबाइल नंबर लिखे' />
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							अन्य मोबाइल नंबर
						</label>
						<input type='number' className='form-control' id='inputPassword4' placeholder='मोबाइल नंबर लिखे' />
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							जन्म तिथि
						</label>
						<input type='date' className='form-control' id='inputPassword4' placeholder='मोबाइल नंबर लिखे' />
					</div>
					<div class='col-md-4 col-6'>
						<label htmlFor='inputState' className='form-label'>
							लिंग
						</label>
						<select id='inputState' className='form-select'>
							<option defaultValue>विकल्प चुनें</option>
							<option>पुरुष </option>
							<option>महिला</option>
						</select>
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputState' className='form-label'>
							वैवाहिक स्थिति
						</label>
						<select id='inputState' className='form-select'>
							<option defaultValue>विकल्प चुनें</option>
							<option>विवाहित</option>
							<option>अविवाहित </option>
						</select>
					</div>
					<div className='col-md-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							पिता/पति का नाम
						</label>
						<input type='text' className='form-control' id='inputPassword4' placeholder='पिता/पति का नाम लिखे' />
					</div>
					<div className='col-md-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							आधारकार्ड में पता
						</label>
						<input type='number' className='form-control' id='inputPassword4' placeholder='आधारकार्ड में दर्ज पता लिखे' />
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							पिनकोड
						</label>
						<input type='number' className='form-control' id='inputPassword4' placeholder='पिनकोड लिखे' />
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							गाँव
						</label>
						<input type='text' className='form-control' id='inputPassword4' placeholder='' />
					</div>
					<div className='col-md-4'>
						<label htmlFor='inputPassword4' className='form-label'>
							राज्य
						</label>
						<input type='text' className='form-control' id='inputPassword4' placeholder='' value='मध्यप्रदेश ' disabled />
					</div>

					<div className='col-12 '>
						<label htmlFor='inputAddress' className='form-label'>
							स्थायी पता <small>(यदि आधार कार्ड में पते के सामान है)</small>
						</label>

						<input type='text' className='form-control' id='inputAddress' placeholder='स्थायी पता लिखे' />
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							पिनकोड
						</label>
						<input type='number' className='form-control' id='inputPassword4' placeholder='पिनकोड लिखे' />
					</div>
					<div className='col-md-4 col-6'>
						<label htmlFor='inputPassword4' className='form-label'>
							गाँव
						</label>
						<input type='text' className='form-control' id='inputPassword4' placeholder='' />
					</div>
					<div className='col-md-4'>
						<label htmlFor='inputPassword4' className='form-label'>
							राज्य
						</label>
						<input type='text' className='form-control' id='inputPassword4' placeholder='' value='मध्यप्रदेश ' disabled />
					</div>
					<div className='col-12'></div>
				</form>
				<Upload head='अपलोड व्यक्तिगत डाक्यूमेंट्स' />
				<Modal />
			</div>
		</>
	);
};

export default Personalinfo;
