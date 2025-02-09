const DOMAIN_COUNT = 9;

function loadDomainNames(): string[] {
    const startingPort = 3000;
    let domainNames: string[] = [];
    for (let i = 1; i <= DOMAIN_COUNT; i++) {
        let domainPort = startingPort + i;
        domainNames.push(`https://localhost:${domainPort}`);
    }
    return domainNames;
}

function setGameDivInfos(): void {
    const domainNames: string[] = loadDomainNames();
    const gameTags: HTMLCollectionOf<Element> = document.getElementsByClassName("Game");

    for (let i = 0; i < domainNames.length; i++) {
        if (i >= gameTags.length) {
            break;
        }

        const gameTag = gameTags[i];
        let gameDiv = gameTag as HTMLDivElement;
        if (gameDiv) {
            gameDiv.addEventListener('click', () => {
                window.location.href = domainNames[i];
            });
        }
    }

    for (let i = 0; i < DOMAIN_COUNT; i++) {
        const gameTag = gameTags[i];
        let gameDiv = gameTag as HTMLDivElement;
        gameDiv.style.backgroundImage = `url(./images/gameIcons/${i}.png)`
    }
}

setGameDivInfos();