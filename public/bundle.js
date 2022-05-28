"use strict";
var App;
(function (App) {
    class Person {
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }
    }
    App.Person = Person;
    const person = new Person("homer", 43);
    console.log(person);
})(App || (App = {}));
//! Si on veut importer du TS dans un autre
/// <reference path="PersonInterface.ts"
/* namespace App {
  class Person implements PersonInterface {
    name : string;
    age: number;

    constructor(n: string, a: number){
      this.name = n;
      this.age = a;
    }
  }

  const person = new Person("homer", 43)
} */ 
// Si on veut avoir nos fichiers ts dans src et nos fichier compilé en JS dans public => tsconfig.js
//! Par défaut, quand on compile, ça compile dans le même fichier que dans le ficher ts
/*** rootDir à définir - outDir à définir  ***/ //! Line 27 & 28 tsconfig
//? Include - Exclude - Line 102 tsconfig.json
//compilerOption
// tsconfig - lib
//TsConfig Option de base
//! If active, the default library wont work anymore
//? https://www.typescriptlang.org/tsconfig#lib
