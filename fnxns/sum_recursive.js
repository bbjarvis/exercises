function sumeToOne(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumeToOne(n - 1);
}

console.log(sumeToOne(4))