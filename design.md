# AngularJs && API

L'architecture de ce projet Agularjs a necessité la mise en place de certains elements:

## Grandes étapes

- generalisation d'un projet via yoman

- configuration du revert proxy car le back-end java est sur le 8080 par defaut ou selon le port defini dans le pom.xml

- gestion des routes 

- mise en place de services pour l'appel des methodes CRUD de l'api rest Java

## Réalisation

Nous avons creer une application CRUD implementant quelques exemples (person ,home heater ...) là où on a mis en place une gestion de route via le module.
angular-route et la directive ng-view , ceci nous a permi de changer le contenu de la page en restant single page(sans la recharcher)
 
pour chaque redirection nous avons creer une template et un controlleur associé dans lequel nous avons defini les methodes comme create, delete etc .. via un factory
 
 
- l'usage du databinding permet de lier le contenu de la page html au modele. En appelant une methode du service defini sur le modele en utilisant $htpp
- on accede via le revert proxy à l'api rest definie au niveau du backedn java , qui a son tour passe l'information au dao afin d'interroger la base de données.
 
 



