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
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

  // Select the input element and get the raw HTML node
  var dateFilter = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = dateFilter.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(date => date.datetime === inputValue);
  
  console.log(filteredData);

  tbody.html("");
  filteredData.forEach(newEntry => {

    
    // Append one table row per sighting
    var newRow = tbody.append("tr");

    // append one cell for each attribute
    newRow.append("td").text(newEntry.datetime);
    newRow.append("td").text(newEntry.city);
    newRow.append("td").text(newEntry.state);
    newRow.append("td").text(newEntry.country);
    newRow.append("td").text(newEntry.shape);
    newRow.append("td").text(newEntry.durationMinutes);
    newRow.append("td").text(newEntry.comments);
  });
});
