function addUser() {
   player_1_name= document.getElementById("player1NameInput").value;
   player_2_name= document.getElementById("player2NameInput").value;

   localStorage.setItem("player_1_name", player_1_name);
   localStorage.setItem("player_2_name", player_2_name);

   window.location="game_page.html";
}