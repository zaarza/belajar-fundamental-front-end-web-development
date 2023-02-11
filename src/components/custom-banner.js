export default class CustomBanner extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("banner");
  }
}

customElements.define("custom-banner", CustomBanner);
