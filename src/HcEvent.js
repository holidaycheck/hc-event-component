import {formatTimes} from './times.js';

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

const allTags = rootNode => {
  const tagNodes = rootNode.querySelectorAll('hc-event-tags li');
  const tags = [];
  tagNodes.forEach(node => tags.push(node.innerText));
  return tags;  
}

const addressIsAtHolidayCheck = rootNode => {
  let addressNode = rootNode.querySelector('address');
  const addressText = addressNode ? addressNode.innerText : '';
  return addressText.toLowerCase().includes('holidaycheck');
}

class HcEvent extends HTMLElement {
  connectedCallback() {
    if (addressIsAtHolidayCheck(this)) {
      const img = new Image();
      img.src = '//techblog.holidaycheck.com/img/hc-labs-only-logo.svg';
      const addressNode = this.querySelector('address');
      addressNode.parentNode.insertBefore(img, addressNode);
    }
    formatTimes(this.querySelectorAll('time'));
  }
  hasTag(tagName) {
    const tags = allTags(this);
    const lowerCaseTags = tags.map(tag => tag.toLowerCase());
    return lowerCaseTags.includes(tagName.toLowerCase());
  }
  withEachTag(cb) {
    const tags = allTags(this);
    tags.forEach(cb);
  }
}

window.customElements.define('hc-event', HcEvent);
