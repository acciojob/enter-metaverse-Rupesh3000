const enterButton = document.getElementById("enterBtn");

// Add an event listener to the button
enterButton.addEventListener("click", function () {
  const currentStatusElement = document.getElementById("status");

  if (currentStatusElement) {
    const newStatusElement = document.createElement("h1");

    newStatusElement.textContent = "Entered Metaverse";

    newStatusElement.id = "status";

    currentStatusElement.replaceWith(newStatusElement);
  }
});