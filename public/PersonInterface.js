"use strict";
var App;
(function (App) {
    class Person {
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }
    }
    const person = new Person("homer", 43);
})(App || (App = {}));
