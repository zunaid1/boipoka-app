import React, { Suspense, use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({ item }) => {
//const data = use(bookPromise)

	const { author, bookId, bookName, category, image, publisher, rating, review, totalPages, yearOfPublishing, tags } = item;
	console.log(bookId)

	return (
		<Link to={`/bookDetails/${bookId}`}>
			<div className="card bg-base-100 shadow-sm w-full border p-6">
			<figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
				<img
					src={image}
					className='h-[166px]'
					alt="Shoes" />
			</figure>
			<div className="card-body">
					<div className='flex justify-center items-center gap-2 bg-gray-100  p-3'>
						{
							tags.map(tg =>
								<span
									className='text-xl bg-blue-200 py-2 px-3 rounded-xl text-center'>{tg}
								</span>)
						}
					</div>
				<h2 className="card-title">
					{bookName}
					
						<div className="badge badge-secondary">P:{totalPages}</div>
				</h2>
					<p>Book By: {publisher}</p>
					<div className='border-t-2 border-dashed'></div>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Y:{yearOfPublishing}</div>
					<div className="badge badge-outline">{category}</div>
					<div className="badge badge-outline">{rating}<FaStarHalfAlt />
					</div>
				</div>
			</div>
		</div>
		</Link>




	);
};

export default Book;