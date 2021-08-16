//function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
//}


export function values(obj) 
{
  let values = [];
  for (let key in obj) 
  {
    values.push(obj[key]);
  }
  return values;
}