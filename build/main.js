"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App {
  constructor() {
    _defineProperty(this, "run", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (name = 'B Sandbox') {
        console.log(`This App\`s name is "${name}".`);
      });

      return function () {
        return _ref.apply(this, arguments);
      };
    }());
  }
  /**  Classic version */
  // constructor() {
  //     this.run = (name = 'B Sandbox') => {
  //         console.log(`This App\`s name is "${name}".`);
  //     };
  // }


}

const app = new App();
app.run().then(() => console.log('Done')).catch(() => console.error('We have the problem:('));