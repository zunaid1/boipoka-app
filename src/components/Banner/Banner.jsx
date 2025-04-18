import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
	return (
		<div className='flex justify-between items-center w-full p-10 gap-2'>
			<div className='flex flex-col justify-center items-center text-center'>
				<h1 className='text-5xl font-bold'>Your Trusted Partner in Knowledge.</h1>
				<button className='btn btn-primary p-6 text-2xl mt-6'>
					Click me
				</button>
			</div>
			<div>
				<img src={bookImage}
					className='rounded'
					alt="" />
			</div>

		</div>
	);
};

export default Banner;