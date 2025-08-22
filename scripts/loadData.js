fetch("/data/projectList.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse JSON from the response
  })
  .then((data) => {
    const viewModel = ko.mapping.fromJS(data); // Load the data into the observable array
    ko.applyBindings(viewModel);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
