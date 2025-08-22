function LoadJsonFile() {
  fetch("/data/projectList.json") // Fetch the JSON file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load JSON file");
      }
      return response.json(); // Parse JSON
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
    });
}

const viewModel = ko.mapping.fromJS(LoadJsonFile());
ko.applyBindings(viewModel);
