// Function to open the game modal
function openGame(gameId) {
  const modal = document.getElementById("game-modal");
  const gameFrame = document.getElementById("game-frame");
  const gameUrl = "https://ds-247.github.io/integratedRps/"; // Set the URL of your game

  gameFrame.src = gameUrl;
  modal.style.display = "block";

  // Add the "RPS" class to the modal content using JavaScript
  const modalContent = document.querySelector(".modal-content");
  modalContent.classList.add("RPS");

  modal.style.position = "absolute";
}

// Function to close the game modal
function closeGame() {
  var modal = document.getElementById("game-modal");
  modal.style.display = "none";
}

// for controlling the playback of gif <img id="gif" src="your-animation.gif" alt="Your Animation">

//     <script>
//         // Get a reference to the GIF
//         const gif = document.getElementById('gif');

//         // Function to play the GIF
//         function playGif() {
//             gif.play();
//         }

//         // Function to pause the GIF
//         function pauseGif() {
//             gif.pause();
//         }

//         // Add event listeners for mouseover and mouseout
//         gif.addEventListener('mouseover', playGif);
//         gif.addEventListener('mouseout', pauseGif);
//     </script>
