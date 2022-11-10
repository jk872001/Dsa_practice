const perfect = (x) => {
  for (let i = 0; i < x; i++) {
    if (i * i === x) {
      return i;
    }
  }
};

console.log(perfect(4));
