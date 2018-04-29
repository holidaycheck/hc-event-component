const allTags = (rootNode) => {
  const tagNodes = rootNode.querySelectorAll('[is-tag-list] *');
  const tags = [];
  tagNodes.forEach(node => tags.push(node.innerText));
  return tags;  
}

class HcEvent extends HTMLElement {
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
