import React, { Suspense, use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";


const Book = ({ item }) => {
//const data = use(bookPromise)

	const { author, bookId, bookName, category, image, publisher, rating, review, totalPages, yearOfPublishing } = item;
	console.log(item)

	return (
		<div className="card bg-base-100 shadow-sm w-full border p-6">
			<figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
				<img
					src={image}
					className='h-[166px]'
					alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{bookName}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">{category}</div>
					<div className="badge badge-outline">{rating}<FaStarHalfAlt />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;