// Sample Data: Destinations
const destinations = [
  {
    name: "Bali, Indonesia",
    description: "A tropical paradise with stunning beaches and vibrant culture.",
    image: "images/bali.png",
    tags: ["beach", "adventure"],
  },
  {
    name: "Swiss Alps",
    description: "Breathtaking mountain views and world-class skiing.",
    image: "images/swissAlps.png",
    tags: ["mountain", "adventure"],
  },
  {
    name: "Paris, France",
    description: "The city of love, known for its art, fashion, and cuisine.",
    image: "images/paris.png",
    tags: ["city","country"],
  },
  {
    name: "Queenstown, New Zealand",
    description: "Adventure capital of the world with stunning landscapes.",
    image: "images/queenstown.png",
    tags: ["mountain", "adventure"],
  },
  {
    name: "Angkor Temple, Cambodia",
    description: "Angkor Wat: A UNESCO World Heritage Site in Cambodia.",
    image: "images/Maldives.jpeg",
    tags: ["temple"],
  },
  {
    name: "Golden Temple, India",
    description: "Golden Temple: A spiritual and architectural marvel in India..",
    image: "images/Bora.jpeg",
    tags: ["temple", "adventure"],
  },
  {
    name: "Country of Italy, Italy",
    description: "Italy: Rich history, art, and cuisine.",
    image: "images/Italy.jpeg",
    tags: ["country"],
  },
  {
    name: "Country of Japan, Japan",
    description: "Japan: A blend of tradition and modernity.",
    image: "images/Japan.jpeg",
    tags: ["country"],
  },
];

// DOM Elements
const preferenceForm = document.getElementById("preferenceForm");
const destinationList = document.getElementById("destinationList");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");

// Event Listener for Form Submission
preferenceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedPreferences = Array.from(
    document.querySelectorAll('input[name="preference"]:checked')
  ).map((input) => input.value);

  const filteredDestinations = destinations.filter((destination) =>
    selectedPreferences.some((preference) => destination.tags.includes(preference))
  );

  displayDestinations(filteredDestinations);
});

// Event Listener for Search Button
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm)
  );
  displayDestinations(filteredDestinations);
});

// Event Listener for Clear Button
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  displayDestinations(destinations);
});

// Function to Display Destinations
function displayDestinations(destinations) {
  destinationList.innerHTML = ""; // Clear previous results

  destinations.forEach((destination) => {
    const card = document.createElement("div");
    card.className = "destination-card";

    card.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}">
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
    `;

    destinationList.appendChild(card);
  });
}

// Initial Display: Show all destinations
displayDestinations(destinations);