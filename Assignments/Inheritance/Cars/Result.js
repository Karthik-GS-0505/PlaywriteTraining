import { BMW } from "./BMW.js";
import { Audi } from "./Audi.js";

console.log("------------");

const bmw = new BMW();
bmw.start();
bmw.refuel();
bmw.autoEngine();
bmw.stop();

console.log("------------");

const audi = new Audi();
audi.start();
audi.refuel();
audi.autoGear();
audi.stop();