class HcEvent extends HTMLElement {
  connectedCallback() {
  }
  hasTag(tagName) {
    const tagNodes = this.querySelectorAll('[is-tag-list] *');
    const tags = [];
    tagNodes.forEach(node => tags.push(node.innerText));
    const lowerCaseTags = tags.map(tag => tag.toLowerCase());
    return lowerCaseTags.includes(tagName.toLowerCase());
  }
}

window.customElements.define('hc-event', HcEvent);
