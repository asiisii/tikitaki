export default class GameView {
  update(game) {
    this.updateTurn(game);
    this.updateBoard(game);
  }

  updateTurn(game) {        
      let playerX= document.querySelector('.player-x');
      let playerO = document.querySelector('.player-o');
      let player1Img= document.querySelector('.one');
      let player2Img = document.querySelector('.two');
      let msg = document.querySelector(".message")
      
      playerX.classList.remove("active");
      playerO.classList.remove("active");
      msg.innerHTML =  " "      

      if (!game.isInProgress() && game.counter === 9) {
        msg.innerHTML =  `🤷🏻‍♂️ 🤷🏻‍♀️ It's a Draw 🤷🏻‍♀️ 🤷🏻‍♂️`
      }

      if (game.isInProgress() && game.counter !== 9 && game.turn === '🧑🏻') {
          msg.innerHTML =  `🧑🏻's Turn`
          playerX.classList.add('active');
          player2Img.classList.remove('img-border')
          player1Img.classList.add('img-border')
      } 
      
      else if (game.isInProgress() && game.counter !== 9 && game.turn === '👩🏻'){
          msg.innerHTML =  `👩🏻's Turn`
          playerO.classList.add('active');
          player1Img.classList.remove('img-border')
          player2Img.classList.add('img-border')
      }

  }

  updateBoard(game) {
    const msg = document.querySelector(".message")

    const winningCombination = game.findWinningCombination();

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.box[data-index="${i}"]`);

      tile.classList.remove("winner");
      
      let classType = game.board[i] == "🧑🏻" ? "tile-x" : "tile-o";
      
      tile.innerHTML = `<span class="${classType}">${game.board[i] ? game.board[i] : ""}</span>`;
   
      if (winningCombination && winningCombination.includes(i)) {
        if (classType === 'tile-x') {
          msg.innerHTML =  `✨💫🎊🎉 🧑🏻 WON 🎉🎊💫✨`
        } else {
          msg.innerHTML = `✨💫🎊🎉 👩🏻  WON 🎉🎊💫✨`
        }
        tile.classList.add("winner");
      } 
    }
  }
}
