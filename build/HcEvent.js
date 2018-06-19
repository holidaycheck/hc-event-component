(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template = document.createElement('template');
template.innerHTML = '\n  <style>\n    :host {\n      display: flex;\n      flex-wrap: wrap;\n    }\n  </style>\n  <slot></slot>\n';

var HcEvent = function (_HTMLElement) {
  _inherits(HcEvent, _HTMLElement);

  function HcEvent() {
    _classCallCheck(this, HcEvent);

    var _this = _possibleConstructorReturn(this, (HcEvent.__proto__ || Object.getPrototypeOf(HcEvent)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.appendChild(template.content.cloneNode(true));
    return _this;
  }

  return HcEvent;
}(HTMLElement);

customElements.define('hc-event', HcEvent);

},{}]},{},[1]);
