import Game from "./Game.js";
import GameView from "./GameView.js"

const restart = document.querySelector(".restart-btn")
const boardTiles = document.querySelectorAll(".box")
let game = new Game();
let gameView = new GameView();

restart.addEventListener("click", () => onRestartClick());

boardTiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    });
});

function onTileClick(i) {
    game.makeMove(i)
    gameView.update(game);
}

function onRestartClick() {
    game = new Game();
    gameView.update(game)
}

gameView.update(game)