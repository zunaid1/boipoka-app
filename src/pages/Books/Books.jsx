import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';
import { Link } from 'react-router';


const Books = ({ data }) => {

	// const [allBooks, setAllBooks] = useState([])
	// useEffect(() => {

	// 	fetch("booksData.json")
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log(data)
	// 		})
	// }, [])


	// const bookPromise = fetch('./booksData.json').then(res => res.json())
	console.log(data)


	return (
		<div>
			<h1 className='text-3xl text-center font-bold p-6'>Books </h1>
			<Suspense fallback={<span>Loooooooading......</span>}>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4'>
					{
						data.map(item =>
							<Book
								item={item}
								key={item.bookId}
							></Book>)
					}
				</div>

			</Suspense>
		</div>
	);
};

export default Books;