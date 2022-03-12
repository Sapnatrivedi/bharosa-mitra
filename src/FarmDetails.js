import React from 'react';
import Upload from './Upload';
import Modal from './Modal';

const FarmDetails = () => {
	return (
		<>
			<div className='container my-5'>
				<div className='d-flex mt-3 justify-content-between'>
					<div className='bank-circle text-center'>1</div>

					<div className='mt-2'>
						<h6>खेती</h6>
					</div>
					<div className='border-bank mt-3'></div>
				</div>
				<div className='my-3'>
					<h4>खेत विवरण</h4>
				</div>
				<div>
					<form class='row g-3'>
						<div class='col-md-6 col-6'>
							<label for='inputEmail4' class='form-label'>
								जमीन पावती नम्बर
							</label>
							<input type='text' class='form-control' id='inputEmail4' placeholder='पावती नम्बर लिखे' />
						</div>
						<div class='col-md-6 col-6'>
							<label for='inputPassword4' class='form-label'>
								जियोटैगिंग
							</label>
							<input type='text' class='form-control' id='inputPassword4' />
						</div>
						<div class='col-12'>
							<label for='inputAddress' class='form-label'>
								खसरा नंबर
							</label>
							<input type='text' class='form-control' id='inputAddress' placeholder='खसरा नम्बर लिखे' />
						</div>
						<div class='col-md-6 col-6'>
							<label for='inputEmail4' class='form-label'>
								पहले भूमि धारक का नाम
							</label>
							<input type='text' class='form-control' id='inputEmail4' placeholder='प्रथम भूमि धारक का नाम लिखे' />
						</div>
						<div class='col-md-6 col-6'>
							<label for='inputPassword4' class='form-label'>
								दूसरे भूमि धारक का नाम
							</label>
							<input type='text' class='form-control' id='inputPassword4' placeholder='दूसरे भूमि धारक का नाम लिखे' />
						</div>
						<div class='col-md-6 col-6'>
							<label for='inputCity' class='form-label'>
								आधार कार्ड नंबर
							</label>
							<input type='text' class='form-control' id='inputCity' placeholder='आधार कार्ड नंबर लिखे' />
						</div>
						<div class='col-md-6 col-6'>
							<label for='inputState' class='form-label'>
								आधार कार्ड नंबर
							</label>
							<input type='text' class='form-control' id='inputCity' placeholder='आधार कार्ड नंबर लिखे' />
						</div>
						<div class='col-md-6 col-6'>
							<label for='inputCity' class='form-label'>
								मोबाइल नंबर
							</label>
							<input type='text' class='form-control' id='inputCity' placeholder='पहला मोबाइल नंबर' />
						</div>
						<div class='col-md-6 col-6'>
							<label for='inputState' class='form-label'>
								मोबाइल नंबर
							</label>
							<input type='text' class='form-control' id='inputCity' placeholder='दूसरा मोबाइल नंबर' />
						</div>
						<Upload head='अपलोड जमीन संबंधित डाक्यूमेंट्स' />
						<Modal />
					</form>
				</div>
			</div>
		</>
	);
};

export default FarmDetails;
