//array equal from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
export function areEqual(array1,array2) {
    // if the other array is a falsy value, return
    if (!array1)
        return false;
  
    // compare lengths - can save a lot of time 
    if (array2.length != array1.length)
        return false;
  
    for (var i = 0, l=array2.length; i < l; i++) {
        // Check if we have nested arrays
        if (array2[i] instanceof Array && array1[i] instanceof Array) {
            // recurse into the nested arrays
            if (!areEqual(array2[i],(array1[i])))
                return false;       
        }           
        else if (array2[i] != array1[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
  }
  