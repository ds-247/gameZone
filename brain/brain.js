const gamesData = {
  RPS: "https://ds-247.github.io/integratedRps/",
  SIMON: "https://ds-247.github.io/simon/",
  BLACKJACK: " https://ds-247.github.io/blackJack/",
};



$('img').click( elem => {
  const gameName = elem.target.id;
  const gameUrl = gamesData[gameName];

  $("#game-modal").attr("class",'visible');

  $('iframe').attr('src',`${gameUrl}`);

  $('#modal-content').addClass(`${gameName}`);
})


$('.close').on("click", ()=>{
  $("#game-modal").attr("class","hide");
  $('#modal-content').attr("class","");
  // location.reload();
})

























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
