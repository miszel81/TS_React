class Vehicle {
  constructor(public color: string) {}

  public stop(): void {
    console.log('stop stop');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.stop();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom vroom');
  }
  startDriving(): void {
    this.drive;
  }
}

const car = new Car(4, 'blue');
car.stop();
car.startDriving();
