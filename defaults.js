/* STRETCH PROBLEMS */

//function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
//}


export function defaults(obj, def) 
{
  for (let key in def) 
  {
    if (!obj[key]) 
      obj[key] = def[key];
  } 
  return obj;
}