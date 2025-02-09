# GameHub

## Übersicht
**GameHub** ist eine einfache Anwendung, die in einem Docker-Container ausgeführt werden kann. Diese README enthält Anweisungen, wie du das Docker-Image bauen und den Container starten kannst.

## Voraussetzungen
- Docker muss auf deinem System installiert und konfiguriert sein. [Docker Installationsanleitung](https://docs.docker.com/get-docker/)

## Anwendung bauen und starten

### Schritt 1: Docker-Image bauen
Navigiere in das Verzeichnis, das das Dockerfile enthält, und führe den folgenden Befehl aus, um das Docker-Image zu bauen und zu starten:
```sh
docker build -t gamehub . && docker rm -f gamehub_container || true && docker run --name gamehub_container -d -p 3000:3000 gamehub
