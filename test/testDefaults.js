import { testObject } from "../Inventory/inventory.js";
import { defaults } from "../defaults.js";
const defaultProps = { name: 'Bruce Wayne', age: 40, location: 'Star City', time: 'Night', status: 'Billionare' }; //*to test*

console.log(defaults(testObject,defaultProps));