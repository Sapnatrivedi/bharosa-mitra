// import React, { Component } from 'react';

// class Submit extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			isloggedIn: false,
// 		};
// 	}

// 	render() {
// 		return this.state.isloggedIn ? <div>hello vishwas</div> : <div>hello sapna</div>;

// let message;
// if (this.state.isloggedIn) {
// 	message = <div>hello vishwas</div>;
// } else {
// 	message = <div> hello sapna</div>;
// }

// return <div>{message}</div>;
// 	}
// }

// export default Submit;
import React from 'react';
import Fab from '@material-ui/core/Fab';
import './App.css';
const Submit = () => {
	return (
		<>
			<div className='fixed'>
				<Fab variant='extended' className='submit'>
					सबमिट
				</Fab>
				<Fab variant='extended' className='submit'>
					सेव फॉर लेटर
				</Fab>
			</div>
		</>
	);
};

export default Submit;
