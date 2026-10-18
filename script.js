const filterButtons = document.querySelectorAll(".filter-button");
const destinationCards = document.querySelectorAll(".destination-card");
const searchInput = document.querySelector("#destination-search");
const resultsMessage = document.querySelector("#results-message");
const tripItems = document.querySelector("#trip-items");
const tripCount = document.querySelector("#trip-count");
const tripEmpty = document.querySelector("#trip-empty");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const storageKey = "discover-marinduque-trip-list";
const destinationById = new Map(
  [...destinationCards].map((card) => [card.dataset.destinationId, card])
);
let selectedCategory = "all";
let tripList = [];

try {
  const savedTripList = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (Array.isArray(savedTripList)) {
    tripList = savedTripList.filter((id) => destinationById.has(id));
  }
} catch {
  tripList = [];
}

function saveTripList() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(tripList));
  } catch {
    // The list remains usable for this page view if browser storage is unavailable.
  }
}

function renderTripList() {
  tripItems.replaceChildren();

  tripList.forEach((destinationId) => {
    const card = destinationById.get(destinationId);
    const destinationName = card.querySelector("h3").textContent;
    const item = document.createElement("li");
    const name = document.createElement("span");
    const removeButton = document.createElement("button");

    name.textContent = destinationName;
    removeButton.type = "button";
    removeButton.className = "trip-remove";
    removeButton.dataset.remove = destinationId;
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", `Remove ${destinationName} from trip list`);
    item.append(name, removeButton);
    tripItems.append(item);

    const addButton = card.querySelector(".trip-add");
    addButton.disabled = true;
    addButton.textContent = "In trip list";
  });

  destinationCards.forEach((card) => {
    if (!tripList.includes(card.dataset.destinationId)) {
      const addButton = card.querySelector(".trip-add");
      addButton.disabled = false;
      addButton.textContent = "Add to trip list";
    }
  });

  tripCount.textContent = String(tripList.length);
  tripEmpty.hidden = tripList.length > 0;
}

function applyFilters() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  destinationCards.forEach((card) => {
    const matchesCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;
    const matchesSearch = card.querySelector(".card-copy").textContent.toLocaleLowerCase().includes(query);
    card.hidden = !matchesCategory || !matchesSearch;
    if (!card.hidden) visibleCount += 1;
  });

  resultsMessage.textContent = visibleCount === 0
    ? "No destinations match your search."
    : `${visibleCount} ${visibleCount === 1 ? "destination" : "destinations"} shown`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

document.querySelectorAll(".trip-add").forEach((button) => {
  button.addEventListener("click", () => {
    const destinationId = button.closest(".destination-card").dataset.destinationId;
    if (!tripList.includes(destinationId)) {
      tripList.push(destinationId);
      saveTripList();
      renderTripList();
    }
  });
});

tripItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (!removeButton) return;

  tripList = tripList.filter((destinationId) => destinationId !== removeButton.dataset.remove);
  saveTripList();
  renderTripList();
});

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeNavigation();
    menuToggle.focus();
  }
});

renderTripList();
applyFilters();