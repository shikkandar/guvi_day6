class UberPriceCalculator {
    constructor(distance, duration, surgeMultiplier = 1.0) {
      this.distance = distance;
      this.duration = duration;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice() {
      const baseFare = 2.5;
      const costPerMile = 1.5;
      const costPerMinute = 0.2;
  
      const totalPrice = baseFare + (this.distance * costPerMile + this.duration * costPerMinute) * this.surgeMultiplier;
      
      return totalPrice.toFixed(2); // Round to 2 decimal places
    }
  }
  
  // Example usage
  const trip1 = new UberPriceCalculator(10, 20); // 10 miles, 20 minutes
  console.log("Trip 1 Price:", trip1.calculatePrice());
  
  const trip2 = new UberPriceCalculator(5, 15, 1.5); // 5 miles, 15 minutes with surge multiplier 1.5
  console.log("Trip 2 Price:", trip2.calculatePrice());
  