import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';



const ReadList = () => {
	const [readList, setReadList] = useState([])
	const [sort, setSort] = useState("")

	const data = useLoaderData();
	console.log("All Books", data);

	useEffect(() => {
		const storedBookData = getStoredBook();
		console.log("getData", storedBookData);
		const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
		//console.log("Converted to int",ConvertedStoredBooks);

		const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
		setReadList(myReadList);

		console.log("my Read List", readList);




	}, [])


	//rating
	const handleSort = (type) => {
		setSort(type)
		if(type === "pages"){
			const sortByPage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
			setReadList(sortByPage)
			console.log(sortByPage)
		}
		if(type === "ratings"){
			const sortByRatings = [...readList].sort((a,b) => a.rating - b.rating);
			setReadList(sortByRatings)
			console.log(sortByRatings)
		}

	}


	return (
		<div>
			<div className="dropdown dropdown-hover">
				<div tabIndex={0} role="button" className="btn m-1">Sort By : {sort? sort:""}</div>
				<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
					<li><a onClick={()=> handleSort("pages")}>Pages</a></li>
					<li><a onClick={()=> handleSort("ratings")}>Ratings</a></li>
				</ul>
			</div>




			<Tabs>
				<TabList>
					<Tab>Read Book List</Tab>
					<Tab>My Wish List</Tab>
				</TabList>

				<TabPanel>
					<h2>Books I read: {readList.length}</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4'>
						{
							readList.map(b => <Book key={b.bookId} item={b}></Book>)
						}
					</div>
				</TabPanel>
				<TabPanel>
					<h2>My Wish List</h2>

				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ReadList;