class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
  }
  
  // Example usage
  const person1 = new Person("John Doe", 25, "Male");
  person1.displayDetails();
  
  const person2 = new Person("Jane Smith", 30, "Female");
  person2.displayDetails();
  