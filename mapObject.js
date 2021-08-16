//function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
//}


export function mapObject(obj, cb)
{
  mapObject = {};
  for (let key in obj)
  {
    mapObject[key] = cb(obj[key]);
  }
  return mapObject;
}