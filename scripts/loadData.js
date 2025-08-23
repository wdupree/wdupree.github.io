fetch("/data/projectList.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load JSON file");
    }
    return response.json();
  })
  .then((data) => {
    const viewModel = ko.mapping.fromJS(data);
    ko.applyBindings(viewModel);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
