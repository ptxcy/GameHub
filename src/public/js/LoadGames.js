"use strict";
setGameDivInfos();
function loadDomainNames() {
    return ["https://www.google.de/", "https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"];
}
function setGameDivInfos() {
    const domainNames = loadDomainNames();
    const gameTags = document.getElementsByClassName("Game");
    for (let i = 0; i < domainNames.length; i++) {
        if (i >= gameTags.length) {
            break;
        }
        const gameTag = gameTags[i];
        let gameDiv = gameTag;
        if (gameDiv) {
            gameDiv.addEventListener('click', () => {
                window.location.href = domainNames[i];
            });
        }
    }
    for (let i = 0; i < 9; i++) {
        const gameTag = gameTags[i];
        let gameDiv = gameTag;
        gameDiv.style.backgroundImage = `url(./images/gameIcons/${i}.png)`;
    }
}
