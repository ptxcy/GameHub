# 1. Verwende ein Node.js-Base-Image
FROM node:18-alpine

# 2. Setze das Arbeitsverzeichnis
WORKDIR /app

# 3. Installiere tree, um den Verzeichnisbaum anzuzeigen
RUN apk add --no-cache tree

# 4. Kopiere alle Dateien und Ordner aus dem Projekt-Root in das /app-Verzeichnis
COPY . .

# 5. Zeige den Verzeichnisbaum an (vor der Installation der Abhängigkeiten)
RUN tree /app -I 'node_modules'

# 6. Installiere die Abhängigkeiten
RUN npm install --no-cache

# 7. Führe den TypeScript-Build aus
RUN npx tsc --build

# 8. Kopiere die HTML-Dateien mit einem Post-Build-Skript
RUN node scripts/copyHTML.js

# 9. Zeige den Verzeichnisbaum nach der Kopieraktion an
RUN tree /app -I 'node_modules'

# 10. Exponiere den Port (z. B. 3000)
EXPOSE 3000

# 11. Definiere den Startbefehl
CMD ["node", "dist/server.js"]
