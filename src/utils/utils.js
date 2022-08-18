import { ArrowRight } from "@mui/icons-material";
import { keys } from "@mui/system";
import { object } from "yup";
import { array } from "yup/lib/locale";

const convertToUrl = (urlStr) => {
  // const url = urlStr
  // const urlStr = "Click here"
  return `<a href = ${urlStr} target = "_blank" rel = "noopener"> ${urlStr} </a>`
  // const result = urlStr.link (urlStr)
  // console.log(result)
}

const isValidUrl = urlString=> {
  try { 
    return Boolean(new URL(urlString)); 
  }
  catch(e){ 
    return false; 
  }
}


export const extractObj = (obj = {}, keysToExtract = []) => {
  const arr = [];

  for (let i = 0; i < keysToExtract.length; i++) {
    if (keysToExtract[i] in obj) {
      const newObj = {};

      const ObjKey = keysToExtract[i]

      newObj[ObjKey] = obj[ObjKey];
      console.log(newObj[keysToExtract[i]], isValidUrl(newObj[keysToExtract[i]]))

      if (isValidUrl(newObj[ObjKey])) {

        if (newObj[ObjKey].includes (",")) {
          const urls = newObj[ObjKey].split (",")
          const urlArr = []
          console.log (urls)
          urls.forEach((url) => {
            urlArr.push(convertToUrl (url))
            // console.log(convertToUrl (url))
            // url = convertToUrl (url)
          })
          
          newObj[ObjKey] = urlArr
          console.log(newObj[ObjKey])
          // newObj[ObjKey] = urlArr
          // console.log(newObj[ObjKey])
          // return
        } else {
          try {
            newObj[ObjKey] = convertToUrl (newObj[ObjKey])
            console.log(newObj[ObjKey])
          }
          catch (e) {
            continue
          }
        }
      }
      arr.push(newObj);
    }
  }
  return arr;
};

export const renameKey = (arr, newKeysObj = {}) => {
  let newObj = {};

  arr.forEach((obj) => {
    const oldKey = Object.keys(obj);

    if (oldKey in newKeysObj) {
      let newKey = newKeysObj[oldKey];
      obj[newKey] = obj[oldKey];
      newObj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  });

  return arr;
  // for (let i = 0; i < oldKeys.length; i++) {
  //   if (oldKeys[i] in newKeysObj) {
  //     let newKey = newKeysObj[oldKeys[i]];
  //     obj[newKey] = obj[oldKeys[i]];
  //     delete obj[oldKeys];
  //   }
};
// console.log(obj);
// return obj;

// export default extractObj;

