export const formatStringFromArray = (arr) => {
  let output = "";
  arr.forEach((str, i) => {
    for (let i = 0; i < str.length; i++) {
      if (i === 0 || str[i - 1] === "-") {
        output += str[i].toUpperCase();
      } else if (str[i] === "-") {
        output += " ";
      } else {
        output += str[i];
      }
    }
    if (i !== arr.length - 1) {
      output += ", ";
    }
  });
  return output;
};

export const formatStringFromString = (str) => {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === "-") {
      output += str[i].toUpperCase();
    } else if (str[i] === "-") {
      output += " ";
    } else {
      output += str[i];
    }
  }

  return output;
};
