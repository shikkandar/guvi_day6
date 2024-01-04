class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example usage
  const circle1 = new Circle();
  console.log("Circle 1:", circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());
  
  const circle2 = new Circle(3.5, "blue");
  console.log("\nCircle 2:", circle2.toString());
  console.log("Area:", circle2.getArea());
  console.log("Circumference:", circle2.getCircumference());
  
  // Changing properties
  circle2.setRadius(2.0);
  circle2.setColor("green");
  console.log("\nUpdated Circle 2:", circle2.toString());
  