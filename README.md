### Rock-Paper-Scissors
## This is a Rock-Paper-Scissors gaming project from The Odin Project

Below is my algorithm for this project:

Confirm with the user to start the game

    YES-start the game

    NO-Quit the game

Once the game starts, prompt the user to type in rock/paper/scissors

    if the user's input is invalid, push an error message and ask the user to input the selection again

    Once the user inputs a valid selection, let the computer generate a random selection from rock/paper/scissor

    Compare user's selection with computer's selection and prompt user with a result 

    Store the single round result into memory and prompt the user for a new round

Repeat steps from lines 9-12 until 5 rounds game are completed

Prompt the user with the final result and reset the game

*******************************************************

To add UI, all prompts and alerts need to be removed from script.js, and eventListienrs will be implanted to allow UI.

Below is the general description of the UI for this project:

    There will be a score panel to show the player and computer's scores and three buttons, rock/paper/scissors, to receive the player's decisions.

    Each time when the player pushes a button, the score will be updated according to the single round result.

    Once either the player or computer reached a score of 5, the game is ended, and a message will be printed on the page to declare the final result.