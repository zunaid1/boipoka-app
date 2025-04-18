import React, { Suspense, use } from 'react';

const Book = ({ item }) => {
//const data = use(bookPromise)

	const { author, bookId, bookName, category, image, publisher, rating, review, totalPages, yearOfPublishing } = item;
	console.log(item)

	return (
		<div className="card bg-base-100 shadow-sm w-full">
			<figure>
				<img
					src={image}
					alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					Card Title
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div>
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	);
};

export default Book;