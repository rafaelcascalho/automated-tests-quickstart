const areBothNumbers = (a, b) => {
  return typeof a === "number" && typeof b === "number";
};

exports.sumBlackBox = ({ a, b }) => {
  if (!areBothNumbers(a, b)) {
    return undefined;
  }

  return a + b;
};
