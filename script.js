document.addEventListener("DOMContentLoaded", function () {
  const ratingLabels = document.querySelectorAll(".rating-count");
  const thankYouContainer = document.querySelector(".thanku-container");
  const givenRatingText = document.querySelector(".given-rating");
  const form = document.querySelector("form");
  const container = document.querySelector(".container");

  let selectedRating = 0;

  // Add event listeners to each rating label
  ratingLabels.forEach((label, index) => {
    label.addEventListener("click", () => {
      selectedRating = index + 1;
      label.style.backgroundColor = "var(--primary-orange)";
      label.style.color = "var(--white)";
      updateSelectedRatingText();
    });
  });

  // Function to update the selected rating text
  function updateSelectedRatingText() {
    givenRatingText.textContent = `You selected ${selectedRating} out of 5`;
  }

  // Add an event listener for the form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    thankYouContainer.classList.remove("hidden");

    container.classList.add("hidden");
  });
});
