"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  this.run = function () {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'B Sandbox';
    console.log("This App`s name is \"".concat(name, "\"."));
  };
};

var app = new App();
app.run();