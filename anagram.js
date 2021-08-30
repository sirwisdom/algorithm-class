const anagram = function (str1, str2) {
  let objStr1 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (i in str1) {
    let letter = str1[i];
    objStr1[letter] ? (objStr1[letter] += 1) : (objStr1[letter] = 1);
  }

  for (i in str2) {
    if (!objStr1[str2[i]]) {
      return false;
    } else {
      objStr1[str2[i]] -= 1;
    }
  }

  return true;
};
