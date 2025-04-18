import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

	// const [allBooks, setAllBooks] = useState([])
	// useEffect(() => {

	// 	fetch("booksData.json")
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			console.log(data)
	// 		})
	// }, [])


	const bookPromise = fetch('./booksData.json').then(res => res.json())
	//console.log(bookPromise)


	return (
		<div>
			<h1 className='text-3xl text-center font-bold p-6'>Books </h1>
			<Suspense fallback={<span>Loooooooading......</span>}>
				<Book bookPromise={bookPromise}></Book>

			</Suspense>
		</div>
	);
};

export default Books;