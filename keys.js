// function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
// }


export function keys(obj) 
{
  let keys = [];
  for (let key in obj) 
  {
    keys.push(key);
  }
  return keys;
}