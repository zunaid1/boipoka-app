const getStoredBook = () => {
	const storedBookSTR = localStorage.getItem("readList");

	if (storedBookSTR) {
		const storedBookData = JSON.parse(storedBookSTR);
		return storedBookData;
	}
	else {
		return [];
	}


}



const addToStoredDB = (id) => {
	const storedBookData = getStoredBook();
	if (storedBookData.includes(id)) {
		alert("Bodda Id eta Exist")

	}
	else {
		storedBookData.push(id);
		const data = JSON.stringify(storedBookData);
		localStorage.setItem("readList", data)
		console.log("Saved Data",storedBookData);
	}

}




export { addToStoredDB, getStoredBook };