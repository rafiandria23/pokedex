export const formatStringFromArray = (arr) => {
  let output = "";
  arr.forEach((str, i) => {
    output += formatStringFromString(str);
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

export const formatIdNumber = (id) => {
  if (id < 10) {
    return `#00${id}`;
  } else if (id < 100) {
    return `#0${id}`;
  }
  return `#${id}`;
};
