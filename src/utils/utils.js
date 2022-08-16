import { ArrowRight } from "@mui/icons-material";
import { keys } from "@mui/system";
import { object } from "yup";
import { array } from "yup/lib/locale";

export const extractObj = (obj = {}, keysToExtract = []) => {
  const arr = [];

  for (let i = 0; i < keysToExtract.length; i++) {
    if (keysToExtract[i] in obj) {
      const newObj = {};
      newObj[keysToExtract[i]] = obj[keysToExtract[i]];
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
