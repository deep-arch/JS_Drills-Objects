/* STRETCH PROBLEMS */

//function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
//}

export function invert(obj) 
{
  let invert = {};
  for (let key in obj)
  { 
    invert[obj[key]] = key;
  } 
  return invert;
}
