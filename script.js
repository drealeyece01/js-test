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
    tags: ["city"],
  },
  {
    name: "Queenstown, New Zealand",
    description: "Adventure capital of the world with stunning landscapes.",
    image: "images/queenstown.png",
    tags: ["mountain", "adventure"],
  },
];

// DOM Elements
const preferenceForm = document.getElementById("preferenceForm");
const destinationList = document.getElementById("destinationList");

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