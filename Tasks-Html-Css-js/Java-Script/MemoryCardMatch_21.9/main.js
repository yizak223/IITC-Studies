console.log('hellow');
// Get all the card elements
const cards = document.querySelectorAll('.card');

// Function to handle card click
function handleCardClick() {
  // Toggle the 'flipped' class on the clicked card's inner element
  this.querySelector('.card-inner').classList.toggle('flipped');
}

// Add click event listeners to each card
cards.forEach(card => {
  card.addEventListener('click', handleCardClick);
});
