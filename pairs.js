//function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
//}


export function pairs(obj) 
{
  let pairs = [];
  for (let key in obj) 
  {
    pairs.push([key, obj[key]]);
  }
  return pairs;
}