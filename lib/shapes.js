class Shape {
  constructor(fill = "green") {
    this.fill = fill;
  }

  setColor() {
    return this.fill;
  }
}

class Circle extends Shape {
  constructor(fill, radius) {
    super(fill);
    this.radius = radius;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`;
  }
}

class Triangle extends Shape {
  constructor(fill = "") {
    super(fill);
    this.markUp = `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}"/>`
  }

  render() {
    return this.markUp;
  }
}

class Square extends Shape {
  constructor(fill) {
    super(fill);
  }

  render() {
    return `<rect width="100%" height="100%" fill="${this.fill}" />`;
  }
}

module.exports = {Circle, Triangle, Square}