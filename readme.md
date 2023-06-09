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
($ cd \mel_lab_back\)
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
- connection
- click-droit sur "Databases",
- "New Database",
- lui donner un nom et la DB est créée
