import { r as registerInstance, h, e as Host } from './index-6df8c5bb.js';

const cardCss = ":root{--mod-min-black:#000;--mod-min-dark-gray:#515151;--mod-min-gray:#909090;--mod-min-light-gray:#C5C5C5;--mod-min-white:#FFF;--mod-breeze-green:#9DFFE8;--mod-breeze-light-blue:#7CE7FF;--mod-breeze-light-purple:#B7C7FF;--mod-breeze-blue:#69A5FF;--mod-breeze-dark-blue:#2950D8;--mod-autumn-red:#FFA99D;--mod-autumn-orange:#F08557;--mod-autumn-yellow-orange:#FFAB48;--mod-autumn-brown:#B05F00;--mod-autumn-gold:#EFDB2A;--mod-abyss-blue1:#263E62;--mod-abyss-blue2:#0F0D57;--mod-abyss-indigo:#480081;--mod-abyss-purple:#5A0069;--mod-abyss-dark-purple:#430044}:host{width:fit-content}.card{display:flex;align-content:center;justify-content:center}.card-minimalist{background:var(--mod-min-white);color:var(--mod-min-black)}.card-breeze{background:linear-gradient(180deg, var(--mod-breeze-green) 0%, var(--mod-min-white) 77.84%)}.card-autumn{background:linear-gradient(154.2deg, var(--mod-autumn-red) 12.29%, var(--mod-autumn-yellow-orange) 108.1%)}.card-abyss{background:var(--mod-abyss-blue1);border:6px solid var(--mod-abyss-blue2)}.card-rounded{border-radius:10%}.card-elevated-2{box-shadow:-2px 4px 4px 2px rgba(0, 0, 0, 0.25)}.card-medium{width:auto;height:auto;min-width:120px;min-height:160px}.card-large{width:180px;height:240px}#no-image-filler{display:none;visibility:hidden}";

const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Theme used to control the color elements of the card */
    this.theme = "minimalist";
    /** Optional variable to control corners of card */
    this.rounded = false;
    /** Optional variable to control the size of the card */
    this.size = "large";
  }
  render() {
    return (h(Host, null, h("div", { class: {
        card: true,
        [`card-${this.theme}`]: true,
        [`card-elevated-${this.elevation}`]: true,
        'card-rounded': this.rounded,
        [`card-${this.size}`]: true,
      } }, (this.image)
      ?
        h("div", { class: "card-image" }, h("img", { src: this.image.src, alt: this.image.alt }))
      :
        h("div", { id: "no-image-filler" }), h("span", { part: "title" }, h("slot", null)), h("div", { part: "description" }, h("slot", null)))));
  }
};
Card.style = cardCss;

export { Card as mod_card };
