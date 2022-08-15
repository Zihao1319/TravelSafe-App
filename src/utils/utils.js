import { keys } from "@mui/system";

const extractObj = (obj = {}, keysToExtract = []) => {
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

export default extractObj;
