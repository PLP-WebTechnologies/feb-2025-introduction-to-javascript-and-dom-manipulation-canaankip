// Change text content dynamically
function changeText() {
  const text = document.getElementById("intro-text");
  text.textContent = "🎉 The text has been updated using JavaScript!";
}

// Modify CSS styles via JavaScript
function changeStyle() {
  const heading = document.getElementById("main-heading");
  heading.style.color = "#4CAF50";
  heading.style.fontSize = "2.5rem";
  heading.style.textAlign = "center";
}

// Add or remove an element when a button is clicked
function addElement() {
  const container = document.getElementById("element-container");
  const newDiv = document.createElement("div");
  newDiv.textContent = "🆕 This element was added!";
  newDiv.className = "dynamic-box";
  newDiv.id = "added-box";
  container.appendChild(newDiv);
}

function removeElement() {
  const element = document.getElementById("added-box");
  if (element) {
    element.remove();
  }
}
