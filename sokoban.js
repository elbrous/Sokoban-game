document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("game-container");
    const map = [
        "##########",
        "#        #",
        "# $ @    #",
        "#        #",
        "#. $     #",
        "##########",
    ];

    let playerX = 2;
    let playerY = 2;

    function createGameBoard() {
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                const tile = document.createElement("div");
                tile.className = "tile";
                tile.id = `x${x}y${y}`;

                switch (map[y][x]) {
                    case "#":
                        tile.classList.add("wall");
                        break;
                    case "@":
                        tile.classList.add("player");
                        break;
                    case "$":
                        tile.classList.add("block");
                        break;
                    case ".":
                        tile.classList.add("target");
                        break;
                }

                container.appendChild(tile);
            }
        }
    }

    function movePlayer(dx, dy) {
        const newX = playerX + dx;
        const newY = playerY + dy;
        const currentPlayerTile = document.getElementById(`x${playerX}y${playerY}`);
        const newPlayerTile = document.getElementById(`x${newX}y${newY}`);

        if (newPlayerTile && !newPlayerTile.classList.contains("wall")) {
            currentPlayerTile.classList.remove("player");
            newPlayerTile.classList.add("player");
            playerX = newX;
            playerY = newY;
        }
    }

    function handleKeyPress(event) {
        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                movePlayer(0, -1);
                break;
            case "ArrowDown":
                movePlayer(0, 1);
                break;
            case "ArrowLeft":
                movePlayer(-1, 0);
                break;
            case "ArrowRight":
                movePlayer(1, 0);
                break;
        }
    }

    document.addEventListener("keydown", handleKeyPress);

    createGameBoard();
});
