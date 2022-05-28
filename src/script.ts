//! Si on veut importer du TS dans un autre on peut utiliser les namesSpaces 
//! On peut le faire bien plus simplement avec les modules ES6

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


//! Avec import, 
/* 
  import {Person} from "./PersonInterface.ts" 
  const person ("homer", 22)
*/