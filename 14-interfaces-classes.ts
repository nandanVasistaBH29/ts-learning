// in pure Object Oriented Concepts
//interface can defined as a blue print for a class
//interface tells u what must exist in a class
interface map {
  src: number[];
  dest: number[];
  distance(): number;
  time(): number;
}
class Uber implements map {
  src: number[];
  dest: number[];
  nearestCab(): string {
    return "vechile number";
  }
  distance(): number {
    return Math.sqrt(
      Math.pow(this.dest[1] - this.src[1], 2) -
        Math.pow(this.dest[0] - this.src[0], 2)
    );
  }
  time(): number {
    return 3600;
  }
}

class Zomato implements map {
  src: number[];
  dest: number[];
  nearestDeliveryAgent(): string {
    return "vechile number";
  }
  resturantName: string;
  distance(): number {
    return Math.sqrt(
      Math.pow(this.dest[1] - this.src[1], 2) -
        Math.pow(this.dest[0] - this.src[0], 2)
    );
  }
  time(): number {
    return 12300;
  }
}
