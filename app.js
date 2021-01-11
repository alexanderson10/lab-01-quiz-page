// import functions and grab DOM elements
const quizButton = document.getElementById('start-quiz');
// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    alert('Welcome to my quiz!');
    const confirmation = confirm('Do you wish to proceed');
    if (confirmation === false) {
        return;


    }
})