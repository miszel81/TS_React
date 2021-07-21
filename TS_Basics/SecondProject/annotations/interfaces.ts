interface Reportable {
  summary(): string;
}

const oldCiviv = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `sugar is ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`${item.summary()}`);
};

printSummary(oldCiviv);
printSummary(drink);
