export class Triangle {
  side1: number;
  side2: number;
  side3: number;
  constructor(sideOne: number, sideTwo: number, sideThree: number) {
    this.side1 = sideOne;
    this.side2 = sideTwo;
    this.side3 = sideThree;
  }
  isEquilateral() {
    return (
      this.side1 === this.side2 && this.side1 === this.side3 && this.side1 !== 0
    );
  }
  isIsosceles() {
    return (
      (this.side1 === this.side2 ||
        this.side1 === this.side3 ||
        this.side2 === this.side3) &&
      this.side1 !== 0 &&
      this.side2 !== 0 &&
      this.side3 !== 0 &&
      this.side1 + this.side2 > this.side3 &&
      this.side1 + this.side3 > this.side2 &&
      this.side2 + this.side3 > this.side1
    );
  }
  isScalene() {
    return (
      this.side1 !== this.side2 &&
      this.side1 !== this.side2 &&
      this.side2 !== this.side3 &&
      this.side1 !== 0 &&
      this.side2 !== 0 &&
      this.side3 !== 0 &&
      this.side1 + this.side2 > this.side3 &&
      this.side1 + this.side3 > this.side2 &&
      this.side2 + this.side3 > this.side1
    );
  }
}
