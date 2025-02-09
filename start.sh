#!/bin/bash

# Bauen des Docker-Images
docker build --no-cache --progress=plain -t npm-test-project .

# Überprüfen, ob der Build erfolgreich war
if [ $? -ne 0 ]; then
  echo "Fehler beim Erstellen des Docker-Images!"
  exit 1
fi

# Stoppen und Entfernen des Containers, wenn er existiert
if [ $(docker ps -a -q -f name=npm-test-project) ]; then
  echo "Container wird gestoppt und entfernt..."
  docker stop npm-test-project
  docker rm npm-test-project
fi

# Container starten
echo "Starte neuen Container..."
docker run -d -p 3000:3000 --name npm-test-project npm-test-project

# Überprüfen, ob der Container erfolgreich gestartet wurde
if [ $? -eq 0 ]; then
  echo "Container erfolgreich gestartet!"
else
  echo "Fehler beim Starten des Containers!"
  docker logs npm-test-project  # Zeigt die Logs des Containers, wenn etwas schiefgeht
  exit 1
fi
