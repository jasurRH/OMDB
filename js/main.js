let elList = document.querySelector(".js-list");
let elInput = document.querySelector(".js-input");

const renderTodo = (array, node) => {
	node.innerHTML = "";
	const mov = array.Search;
	for (movie of mov) {
		const newItem = document.createElement("li");
		const newTitle = document.createElement("h3");
		const newImg = document.createElement("img");
		newImg.setAttribute("width", "100%");
		newImg.setAttribute("height", "300px");
		const newSpan = document.createElement("span");

		newTitle.textContent = movie.Title;
		newImg.src = movie.Poster;
		newSpan.textContent = `Years:${movie.Year}`;

		newItem.appendChild(newImg);
		newItem.appendChild(newTitle);
		newItem.appendChild(newSpan);
		node.appendChild(newItem);
	}
};

elInput.addEventListener("change", function () {
	const inputVal = elInput.value;
	async function getPosts(result) {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=c5aec625&s=${result}`,
		);
		const data = await response.json();
		renderTodo(data, elList); 
	}
	getPosts(inputVal);
});
