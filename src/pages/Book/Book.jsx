import React, { Suspense, use } from 'react';

const Book = ({ bookPromise }) => {
		const data = use(bookPromise)

console.log(data)

	return (
		<div>
			<h1>Single Book</h1>

		</div>
	);
};

export default Book;