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

## Création de fichiers (<i>Dans le dossier racine</i>) :
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
    - Créer la table =>
    ```
    CREATE TABLE users ( 
        id int IDENTITY (1,1),
        firstname varchar(50),
        lastname varchar (50),
        phoneNumber varchar(50),
        email varchar(50),
        username varchar(50),
        password varchar (100),
        jwt VARCHAR(500),
        PRIMARY KEY (id)
    )
    ```
* 4ème étape:
    - Test manuel (<i>optionnel</i>) =>
    ```
    INSERT INTO users VALUES (
        'Prenom',
        'Nom',
        '0123456789',
        'e@mail.com',
        'psd',
        'pwd',
        null
    )
    ```
    ```
    SELECT * FROM users
    ```
