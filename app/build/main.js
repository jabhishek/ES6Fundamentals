"use strict";
var Greeter = function Greeter(message) {
  this.message = message;
};
($traceurRuntime.createClass)(Greeter, {greet: function() {
    var element = document.querySelector('#message');
    element.innerHTML = this.message;
  }}, {});
;
var greeter = new Greeter('Hello world!');
greeter.greet();
