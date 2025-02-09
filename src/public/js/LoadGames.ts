setGameDivInfos();

function loadDomainNames(): string[] {
    return ["https://www.google.de/", "https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"]
}

function setGameDivInfos(): void {
    const domainNames: string[] = loadDomainNames();
    const gameTags: HTMLCollectionOf<Element> = document.getElementsByClassName("Game");

    for(let i = 0; i < domainNames.length; i++) {
        if(i >= gameTags.length) {
            break;
        }

        const gameTag = gameTags[i];
        let gameDiv = gameTag as HTMLDivElement;
        if (gameDiv){
            gameDiv.addEventListener('click', () => {
                window.location.href = domainNames[i];
            });
        }
    }

    for(let i = 0; i < 9; i++){
        const gameTag = gameTags[i];
        let gameDiv = gameTag as HTMLDivElement;
        gameDiv.style.backgroundImage = `url(./images/gameIcons/${i}.png)`
    }
}