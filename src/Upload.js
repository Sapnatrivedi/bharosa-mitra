import React from 'react';
import { Link } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import document from './Images/document.png';
import Modal from './Modal';
import './container.css';
const Upload = ({ head }) => {
	return (
		<>
			<div className='col-md-12 d-flex justify-content-between'>
				{' '}
				<label htmlFor='inputPassword4' className='form-label'>
					{head}
				</label>
				<div className='horizontal-line'></div>{' '}
				<div className='file-icon'>
					{' '}
					<Link to='' data-bs-toggle='modal' data-bs-target='#exampleModal'>
						{/* <img src={document} alt='hello' style={{ width: '30px', height: '30px' }} data-bs-toggle='modal' data-bs-target='#exampleModal' />{' '} */}
						<BsFileEarmarkPlus size='20px' />
					</Link>{' '}
				</div>
				<div className='eye-icon'>
					<FiEye size='25px' />
				</div>
			</div>
		</>
	);
};

export default Upload;
