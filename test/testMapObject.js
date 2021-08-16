import { testObject } from "../Inventory/inventory.js";
import { mapObject } from "../mapObject.js";
const cb = (x) => x + ' 2.0'; //*to test*

console.log(mapObject(testObject,cb));
