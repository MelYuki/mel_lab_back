# LABORATOIRE (du 05 au 19 Juin 2023)
## Demandes du client :
- Coder une app, "Gestionnaire d'évènements"
- Création de compte - login
- Options d'évènements:
   * Création
   * Modification
   * Suppression
- Infos d'évènements:
   * Date de début
   * Date de fin
   * Durée
   * Description
- Option supplémentaire:
   * Récursif ou fixe?

## Contraintes :
- Dev Front End:
   * React Native
- Dev Back End:
   * Node / ExpressJs

# Documentation de Dev

## Création du dossier local manuellement :
- mel_lab_back

## Initialisation du projet :
($ cd mel_lab_back)
- npm init

## Installation des dépendances :
- npm i nodemon --save-dev
- npm i express bcrypt dotenv jsonwebtoken mssql

## Création des fichiers et des dossiers (<i>Dans le dossier racine</i>) :
- .env:
    ```
    # Infos server
    DB_NAME = "nomDeVotreDB"
    DB_USER = "votreUsername"
    DB_PWD = "VotrePassword"

    # Port server
    PORT = "votreChoixDePort"

    # Secret JasonWebToken
    JWT_SECRET = "votrePhraseSecrete"
    ```
- .gitignore:
    ```
    # node.js
    #
    node_modules/
    npm-debug.log

    # dotenv
    #
    .env

    # DB_Queries.sql
    #
    DB_Queries.sql
    ```
- app.js (<i>fichier principal</i>)
- controllers/
    * event.controller.js
    * user.controller.js
- db/
    * database.js
- models/
    * event.model.js
    * user.model.js
- routers/
    * router.js

## Initialisation de Git :
- Création du repo github
- $ git init
- $ git add .
- $ git commit -m "Project's init"
- $ git branch -M main
- $ git remote add origin https://github.com/MelYuki/mel_lab_back.git
- $ git push -u origin main

## SSMS database (<i>SQL Server Management Studio</i>):
* 1ère étape:
    - Connection
    - Click-droit sur "Databases",
    - "New Database",
    - Lui donner un nom et la DB est créée
* 2ème étape:
    - Click-droit sur la DB,
    - "New Query"
* 3ème étape:
    - Créer la table <b>"Utilisateurs"</b> =>
    ```
    CREATE TABLE users ( 
        id int IDENTITY (1,1),
        email varchar(50),
        username varchar(50),
        password varchar (100),
        jwt VARCHAR(500),
        PRIMARY KEY (id)
    )
    ```
* 4ème étape:
    - Insert manuel (<i>optionnel</i>) =>
    ```
    INSERT INTO users VALUES (
        'e@mail.com',
        'user',
        'pwd',
        null
    )
    ```
    - Vérifier que l'insert est ok
    ```
    SELECT * FROM users
    ```
* 5ème étape:
    - Créer la table <b>"Évènements"</b> =>
    ```
    CREATE TABLE events ( 
        id int IDENTITY (1,1),
        event_name varchar (50),
        date_in varchar (50),
        date_out varchar (50),
        duration varchar (100),
        description VARCHAR (100),
        PRIMARY KEY (id)
    )
    ```
* 6ème étape:
    - Insert manuel (<i>optionnel</i>) =>
    ```
    INSERT INTO events VALUES (
        'Test event',
        '05/06/2023',
        '19/06/2023',
        '14 jours',
        'Ceci est une entrée manuelle de test'
    )
    ```
    - Vérifier que l'insert est ok
    ```
    SELECT * FROM events
    ```
