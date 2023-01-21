interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year}\nBroken: ${this.broken}`;
  }
};

// const printVehicle = (vehicle: { name: string; year: Date; broken: boolean }): void => {
//   console.log(`Name: ${vehicle.name}, year: ${vehicle.year}, broken: ${vehicle.broken}`);
// };

const printVehicleWithInterface = (vehicle: Reportable): void => {
  console.log('using interface...');
  console.log(vehicle.summary());
};

// printVehicle(oldCivic);
printVehicleWithInterface(oldCivic);