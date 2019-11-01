"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dog =
/*#__PURE__*/
function () {
  function Dog(n, c) {
    _classCallCheck(this, Dog);

    this.name = n;
    this.color = c;
  }

  _createClass(Dog, [{
    key: "skill",
    value: function skill() {
      alert('666');
    }
  }]);

  return Dog;
}();

var dog1 = new Dog('大白', 'white');
dog1.skill();