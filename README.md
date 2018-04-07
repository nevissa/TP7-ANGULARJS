# AngularJs && API

## Description

Ce projet est generé avec  [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.
A partir de ce projet de base nous avons créé un projet (front-end) qui commnunique avec une api distant (back-end) Java sur un server different en respectant l'architecture deja en place

![](/screenshot.PNG?raw=true)

## Fonctionnalités

- Créer une person, heater, home, device
- Supprimer une person, heater, home, device
- Afficher les persons, heaters, homes, devices


## Installation 

- Telecharger l'api back-end (Java)
- Telecharger le front-end (AngularJs)
- Installer les dependances bower install & npm install

Dans le fichier Gruntfile.js un revert proxy est effectué du port 8080 au port 9000 , pour donc executez les requetes depuis l'api rest vous utiliserez le port 9000 donc : "localhost:9000" pour etablir la connexion

## test

Pour lancer le projet vous aurez besoin de lancer l'api rest sur le serveur tomcat, puis le front-end via grunt serveur ensuite on peut tester les fonctionnalités.

NB: si le serveur tomcat n'est pas sur le port 8080 il faut indiquer le port sur lequel il est lancé dans le fichier Gruntfile.js le port du revert proxy du projet AngularJs

## Auteurs
* **Diakite Hamed** (https://github.com/hamedvama)
* **Khabaz Nevissa** (https://github.com/nevissa)

## License

This project is licensed under the GNU License.


