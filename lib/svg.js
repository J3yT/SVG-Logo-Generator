class SVG {
  constructor() {}

  render() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ${this.shapeRender}

  ${this.textSet}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`;
  }

  setShape() {
    this.shapeRender = shape.render();
  }

  setText(text, textColor) {
    this.textSet = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
}

module.exports = { SVG };
