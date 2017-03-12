# Superhero App
This repository holds the supercool app to manage superheroes!!!

## Prerequisites
* Node.js and npm are essential to Angular 2 development. 
* Install [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Setup project
First thing, obviously, clone this repo. Then:

* Go to project root.
* Make sure Node v6.5.0 is installed with nvm: `nvm install`.
* Type `nvm use` to select the Node v6.5.0.
    * *NOTE: It must be typed as first command each time you open a new shell to work with the app*
* Run `npm install -g yarn` to install **Yarn** dependency manager.
* Run `yarn install` to download all needed dependencies.
* Copy the `.env.environment.dist` into `.env.development` to create the development environment.
    * Use the `.dist` draft to specify the variables. You need, at least, to specify the `API_URL`.
* Run `npm start` to start the development built-in server.
* Go to [http://localhost:8080](http://localhost:8080).
* Popping champagne??? :)

## References

* [Webpack](https://webpack.js.org/configuration/) - The tool used to bundle the app.
* [TypeScript](https://www.typescriptlang.org/docs/tutorial.html) - The main superset environment to write javascript.
* [Angular2](https://angular.io/docs/ts/latest/) - Web framework we use.
* [RxJS](http://reactivex.io/intro.html) - The bundled library to manager async code.
* [LoDash](https://lodash.com/docs/) - The utility library for javascript.

## Useful

* [LearnRxJS](https://www.learnrxjs.io/) - A gitbook for **RxJS**. 
