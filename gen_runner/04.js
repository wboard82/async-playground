function yellify(str) {
  return new Promise(resolve => {
    setTimeout(() => resolve(str.toUpperCase()), 500);
  });
}

function excitrr(str) {
  return new Promise(resolve => {
    setTimeout(() => resolve(str + "!!!"), 500);
  });
}

// I miss this syntax:
function soExcited(input) {
  let excited = yellify(input);
  let loudAndExcited = excitrr(excited);
  console.log(loudAndExcited);
}

soExcited("Hi");
soExcited("There!");
soExcited("FRIEND!");
