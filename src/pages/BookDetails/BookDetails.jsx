import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { ToastContainer, toast } from 'react-toastify';


const MySwal = withReactContent(Swal)






const BookDetails = () => {
	const { id } = useParams()
	const bookId = parseInt(id);
	const data = useLoaderData()
	const singleBook = data.find(book => book.bookId === bookId);

	const { author, bookId1, bookName, category, image, publisher, rating, review, totalPages, yearOfPublishing, tags } = singleBook;


	//console.log(bookName, review)
	const handleMarkAsRead = id => {
		//store with id
		//wheere to store 
		//array or collection
		// if book already exist the show  a alart
		//if book no exist then push in the collection or array 

		// MySwal.fire({
		// 	icon: "success",
		// 	title: "Signed in successfully"
		//   });


		addToStoredDB(id)




	}

	return (
		<div className='flex gap-5 flex-col md:flex-row lg:flex-row'>
			{/* image-container */}
			<div className='w-full md:w-2/3 lg:md:w-2/3 bg-gray-200 p-6 text-center mx-auto justify-center items-center place-items-center '>
				<img
					className='w-48 '
					src={image}>

				</img>

			</div>

			{/* bookDetails-container */}
			<div className='space-y-4 p-6'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>{bookName}</h1>
				<h3 className='text-xl md:text-2xl lg:text-4xl'>By: {author}</h3>

				<h3 className='border-y-3 border-gray-200 p-2 text-xl md:text-2xl lg:text-4xl'> {category}</h3>


				<div>
					<h2 className='font-bold'>Review: </h2> <span>{review}</span>
				</div>


				<div className='flex gap-3' >
					<h2 className='mr-3'>Tag </h2>
					{
						tags.map(tag => <h1 className='text-green-700 text-xl font-bold'>#{tag}</h1>)
					}

				</div>
				<div>
					<div className='flex text-center items-center'>
						<p className='mr-10'>Number of Pages</p>
						<span>:</span>
						<span className='font-bold'>{totalPages}</span>
					</div>

					<div className='flex text-center items-center'>
						<p className='mr-10'>Publisher</p>
						<span>:</span>
						<span className='font-bold'>{publisher}</span>
					</div>
					<div className='flex text-center items-center'>
						<p className='mr-10'>Year of Publishing</p>
						<span>:</span>
						<span className='font-bold'>{yearOfPublishing}</span>
					</div>


				</div>

				<div className='flex items-center justify-center gap-3'>
					<button 
					onClick={()=> handleMarkAsRead(id)}		
					class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition font-bold">
						Mark as Read
					</button>

					<button class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition font-bold">
						Add To WishList
					</button>

				</div>

			</div>
		</div>
	);
};

export default BookDetails;