// from data.js
var tableData = data;
// Loop through an array of sightings and build the entire table body from scratch

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Iterate through each sighting
tableData.forEach(entry => {

  // Append one table row per sighting
  var row = tbody.append("tr");

  // append one cell for each attribute
  row.append("td").text(entry.datetime);
  row.append("td").text(entry.city);
  row.append("td").text(entry.state);
  row.append("td").text(entry.country);
  row.append("td").text(entry.shape);
  row.append("td").text(entry.durationMinutes);
  row.append("td").text(entry.comments);
});
// 2. Filtered table must be rendered when date is entered.

// 3. Table must be cleared and reset when a new date is entered.

// 4. When no date is entered, entire table is rendered


// Using the UFO dataset provided in the form of an array of 
// JavaScript objects, write code that appends a table to your 
// web page and then adds new rows of data for each UFO sighting.

// // Select the button
// var button = d3.select("#filter-btn");

// button.on("click", function() {

//   // Select the input element and get the raw HTML node
//   var dateFilter = d3.select("#filters");

//   // Get the value property of the input element
//   var inputValue = dateFilter.property("value");

//   console.log(inputValue);
//   console.log(tableData);


//   var filteredData = tableData.filter(date => date.datetime === inputValue);

//   console.log(filteredData);
// });

// Use a date form in your HTML document and write 
// JavaScript code that will listen for events and search 
// through the date/time column to find rows that match user input.