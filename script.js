const form = document.querySelector(".ratingForm");
const rating = document.querySelector(".ratingFeedback");
const thank = document.querySelector('.thankSection');
const selection = document.querySelector('.selection');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (form.rating.value !== "") {
    const ratingVal = form.rating.value;

    selection.textContent = `You selected ${ratingVal} out of 5`;
    rating.style.display = 'none';
    thank.style.display = 'flex';
  }
  return;

});