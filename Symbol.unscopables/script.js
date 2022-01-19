let egg = {
  yellow: '노른 자',
  white: '흰 자',
};

egg[Symbol.unscopables] = {
  yellow: false,
  white: true,
};

with (egg) {
  console.log(yellow);
  console.log(white);
}
