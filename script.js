// Define an array of trains with their details
const trains = [
	{ trainNumber: "12423", trainName: "Rajdhani Express", fromC: "Dibrugarh Town", to: "New Delhi"},
	{ trainNumber: "12424", trainName: "Rajdhani Express", fromC: "New Delhi", to: "Dibrugarh Town"},
	{ trainNumber: "12565", trainName: "Bihar Sampark KE", fromC: "Siwan Junction", to: "New Delhi"},
	{ trainNumber: "12553", trainName: "Vaishali SF Ex", fromC: "Siwan Junction", to: "New Delhi"},
	{ trainNumber: "12523", trainName: "New Delhi SF Ex", fromC: "Siwan Junction", to: "New Delhi"},
	{ trainNumber: "12203", trainName: "Amritsar Garib R", fromC: "Saharsa Junction", to: "New Delhi"},
	{ trainNumber: "15707", trainName: "Amrapali Express", fromC: "Siwan Junction", to: "Old Delhi"},
	{ trainNumber: "19602", trainName: "Udaipur City Weekly", fromC: "Siwan Junction", to: "New Delhi"},
	{ trainNumber: "15909", trainName: "Avadh Assam Ex", fromC: "Siwan Junction", to: "New Delhi"},
	{ trainNumber: "14005", trainName: "Lichchhavi Express", fromC: "Siwan Junction", to: "New Delhi"},
	{ trainNumber: "15279", trainName: "Poorabiya Express", fromC: "Saharsa Junction", to: "Anand Vihar Term."},
	{ trainNumber: "12204", trainName: "Saharsa Garib R Ex", fromC: "New Delhi", to: "Siwan Junction"},
	{ trainNumber: "12566", trainName: "Bihar Sampark KE", fromC: "New Delhi", to: "Siwan Junction"},
	{ trainNumber: "12524", trainName: "New Jalpaiguri SFE", fromC: "New Delhi", to: "Siwan Junction"},
	{ trainNumber: "12554", trainName: "Vaishali SFE", fromC: "New Delhi", to: "Siwan Junction"},
	{ trainNumber: "15910", trainName: "Avadh Assam Ex", fromC: "New Delhi", to: "Siwan Junction"},
	{ trainNumber: "15708", trainName: "Amrapali Express", fromC: "New Delhi", to: "Siwan Junction"},
	{ trainNumber: "15280", trainName: "Poorabiya Ex", fromC: "Anand Vihar Term.", to: "Siwan Junction"},
	{ trainNumber: "14006", trainName: "Lichchhavi Express", fromC: "New Delhi", to: "Siwan Junction"},
	{ trainNumber: "12024", trainName: "Shatabdi Express", fromC: "Patna Junction", to: "Howrah Junction" },
	{ trainNumber: "12274", trainName: "Duronto Express" , fromC: "New Delhi", to: "Howrah Junction"},
	{ trainNumber: "12235", trainName: "Humsafar Express" , fromC: "Madhupur Junction", to: "Anand Vihar Term."}
];

// Function to add the train details to the table
function addTrainDetails() {
	// Get the table body element
	const trainTable = document.getElementById("train-table");

	// Loop through the array of trains and add them to the table
	for (let i = 0; i < trains.length; i++) {
		// Create a new row for the train details
		const newRow = document.createElement("tr");

		// Create a new cell for the train number
		const numberCell = document.createElement("td");
		numberCell.textContent = trains[i].trainNumber;


		// Create a new cell for the train name
		const nameCell = document.createElement("td");
		nameCell.textContent = trains[i].trainName;

        // Create a new cell for the train name
		const fromCell = document.createElement("td");
		fromCell.textContent = trains[i].fromC;

        // Create a new cell for the train name
		const toCell = document.createElement("td");
		toCell.textContent = trains[i].to;

		// Add the number and name cells to the row
		newRow.appendChild(numberCell);
		newRow.appendChild(nameCell);
        newRow.appendChild(fromCell);
        newRow.appendChild(toCell);

		// Add the row to the table
		trainTable.appendChild(newRow);
	}
}

// Call the addTrainDetails function to add the initial train details to the table
addTrainDetails();

// Get the search input and search button elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Add an event listener to the search button
searchButton.addEventListener("click", function() {
	// Get the search term entered by the user
	const searchTerm = searchInput.value.toLowerCase();

	// Get the table body element
	const trainTable = document.getElementById("train-table");

	// Clear the table body
	trainTable.innerHTML = "";

	// Loop through the array of trains and add matching trains to the table
	for (let i = 0; i < trains.length; i++) {
		// Check if the train name or number contains the search term
		if (trains[i].trainName.toLowerCase().includes(searchTerm) || trains[i].trainNumber.includes(searchTerm)) {
			// Create a new row for the train details
			const newRow = document.createElement("tr");

			// Create a new cell for the train number
			const numberCell = document.createElement("td");
			numberCell.textContent = trains[i].trainNumber;

			// Create a new cell for the train name
			const nameCell = document.createElement("td");
			nameCell.textContent = trains[i].trainName;

            // Create a new cell for the train name
		    const fromCell = document.createElement("td");
	    	fromCell.textContent = trains[i].fromC;

            // Create a new cell for the train name
		    const toCell = document.createElement("td");
		    toCell.textContent = trains[i].to;

			// Add the number and name cells to the row
			newRow.appendChild(numberCell);
			newRow.appendChild(nameCell);
            newRow.appendChild(fromCell);
            newRow.appendChild(toCell);

			// Add the row to the table
			trainTable.appendChild(newRow);
		}
	}
});

// Add an event listener to the search input field
searchInput.addEventListener("keydown", function(event) {
	// Check if the 'Enter' key was pressed
	if (event.key === "Enter") {
		// Trigger the click event on the search button
		searchButton.click();
	}
});
