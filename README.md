# lab-01-quiz-page

OUTCOMES:
There should be an alert
There should be a confirm so the user can opt out
There should be a first and last name prompt
There should be three questions prompts
We should show the user their results after taking the quiz

HTML Setup:
-Some information, presented nicely with an image and some list items
    -Why? so the users know what to do
-A button to launch the quiz.
    -Why? to launch the quiz
-We need a secret, empty results div
    Why? to inject/display the results to the user

1) Get DOM elements
    -button
    -secret div
2) Add event listeners
    -button
3) Respond to user input
    -launch an alert 
    -launch a confirmation
        -if the user says no, nothing else happens(`return` nothing to break out of the cool zone)
        -if the user says yes, launch the series of prompts
    -launch a first name prompt
        -store that output to display later
    -launch a last name prompt
        -store that output to display later
    -launch quiz prompts with specific yes/no questions
        -how do we evaluate the answers?
            -Yes
            -Yeah
            -Yep
            - anything that starts with a y counts as a yes
            -how many times are we going to see if somethings counts as a yes? 
                -three times 
                -instead of copying and pasting, lets write a `countsAsAYes` function!
    -make a results string
    -diplay result string
        -inject stuff into the `textContent` of our secret results div