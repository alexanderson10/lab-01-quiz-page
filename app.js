// import functions and grab DOM elements
import { countAsAYes } from './utils.js';
const quizButton = document.getElementById('start-quiz');
const hiddenDiv = document.getElementById('secret-div')
// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    alert('Welcome to my quiz!');
    const confirmation = confirm('Do you wish to proceed');
    if (!confirmation) return;

    let correctAnswers = 0;
    const userFirstName = prompt('what is your first name');
    const userLastName = prompt('what is your last name');
    const firstName = prompt('is my first name Alex?');
    if (countAsAYes(firstName)) correctAnswers++
    const lastName = prompt('is my last name Anderson?');
    if (countAsAYes(lastName)) correctAnswers++
    const favoriteHobby = prompt('is my favorite hobby baseball growing up');
    if (countAsAYes(favoriteHobby)) correctAnswers++
    console.log(correctAnswers)

    const resultsString = `Hey ${userFirstName} ${userLastName}! You got ${correctAnswers} correct!`;
    console.log(resultsString)

    hiddenDiv.textContent = resultsString;




})