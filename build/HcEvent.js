(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _times = require('./times.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
TODO
- [x] nicer dates, more readable
- [x] link the map, <a href="http://maps.google.com/maps?q=" className="fa fa-map"></a><br>
- [x] add nomodule, for those browsers that need it (and i would also assume they dont speak ES6 and need the polyfill)
- [x] show some tags only, expand on demand
- [ ] filter by tag
- [ ] provide structured data http://schema.org/Event for event: https://developers.google.com/search/docs/data-types/event
- [ ] show description when hovering the event
- [ ] show nice tooltips on hover (e.g. location, datetime info, twitter account)
- [ ] "tweet this event" button
 */

var allTags = function allTags(rootNode) {
  var tagNodes = rootNode.querySelectorAll('hc-event-tags li');
  var tags = [];
  tagNodes.forEach(function (node) {
    return tags.push(node.innerText);
  });
  return tags;
};

var addressIsAtHolidayCheck = function addressIsAtHolidayCheck(rootNode) {
  var addressNode = rootNode.querySelector('address');
  var addressText = addressNode ? addressNode.innerText : '';
  return addressText.toLowerCase().includes('holidaycheck');
};

var addMapsLink = function addMapsLink(rootNode) {
  var addressNode = rootNode.querySelector('address');
  if (!addressNode) return;
  addressNode.style.display = 'none';
  var address = addressNode.innerText;
  var mapsLink = document.createElement('a');
  mapsLink.href = 'http://maps.google.com/maps?q=' + encodeURIComponent(address);
  mapsLink.classList.add('fa', 'fa-map');
  mapsLink.target = '_blank';
  rootNode.appendChild(mapsLink);
};

var HcEvent = function (_HTMLElement) {
  _inherits(HcEvent, _HTMLElement);

  function HcEvent() {
    _classCallCheck(this, HcEvent);

    return _possibleConstructorReturn(this, (HcEvent.__proto__ || Object.getPrototypeOf(HcEvent)).apply(this, arguments));
  }

  _createClass(HcEvent, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (addressIsAtHolidayCheck(this)) {
        var img = new Image();
        img.src = '//techblog.holidaycheck.com/img/hc-labs-only-logo.svg';
        var addressNode = this.querySelector('address');
        addressNode.parentNode.insertBefore(img, addressNode);
      }
      (0, _times.formatTimes)(this.querySelectorAll('time'));
      addMapsLink(this);
    }
  }, {
    key: 'hasTag',
    value: function hasTag(tagName) {
      var tags = allTags(this);
      var lowerCaseTags = tags.map(function (tag) {
        return tag.toLowerCase();
      });
      return lowerCaseTags.includes(tagName.toLowerCase());
    }
  }, {
    key: 'withEachTag',
    value: function withEachTag(cb) {
      var tags = allTags(this);
      tags.forEach(cb);
    }
  }]);

  return HcEvent;
}(HTMLElement);

window.customElements.define('hc-event', HcEvent);

},{"./times.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var fixOneDigitHourForSafari = function fixOneDigitHourForSafari(date) {
  // The hour MUST be two-digits, otherwise Safari will say "Invalid Date" :(
  var splitDate = date.split(' ');
  if (/^\d\:/.test(splitDate[1])) {
    return [splitDate[0], '0' + splitDate[1]].join(' ');
  }
  return date;
};
var fixDateForSafari = function fixDateForSafari(date) {
  return fixOneDigitHourForSafari(date).replace(' ', 'T');
};
var newDate = function newDate(date) {
  return new Date(fixDateForSafari(date));
};
var longTimeOptions = { weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
var dayOnlyOptions = { weekday: 'short', month: 'long', day: 'numeric' };
var timeOnlyOptions = { hour: 'numeric', minute: 'numeric' };
var isSameDay = function isSameDay(date1, date2) {
  return date1.toLocaleDateString() === date2.toLocaleDateString();
};

var formatTimes = exports.formatTimes = function formatTimes(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      startDateTime = _ref2[0],
      endDateTime = _ref2[1];

  if (!endDateTime) {
    formatStartTime(startDateTime);
    return;
  }
  var startDate = newDate(startDateTime.innerText);
  var endDate = newDate(endDateTime.innerText);
  startDateTime.setAttribute('datetime', startDate.toISOString());
  endDateTime.setAttribute('datetime', endDate.toISOString());
  if (isSameDay(startDate, endDate)) {
    startDateTime.innerText = startDate.toLocaleDateString('en-GB', longTimeOptions);
    endDateTime.innerText = endDate.toLocaleTimeString('en-GB', timeOnlyOptions);
  } else {
    startDateTime.innerText = startDate.toLocaleDateString('en-GB', dayOnlyOptions);
    endDateTime.innerText = endDate.toLocaleDateString('en-GB', dayOnlyOptions);
  }
};

var formatStartTime = function formatStartTime(startDateTime) {
  var startDate = newDate(startDateTime.innerText);
  startDateTime.setAttribute('datetime', startDate.toISOString());
  startDateTime.innerText = startDate.toLocaleDateString('en-GB', longTimeOptions);
};

},{}]},{},[1]);
