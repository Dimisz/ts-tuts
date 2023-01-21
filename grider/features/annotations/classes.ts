class Vehicle {
  constructor(public color: string){}
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string){
     super(color);
  }

  private drive(): void {
    console.log('wrumm');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDriving();
console.log(`The car has ${car.wheels} wheels. The color is ${car.color}`);