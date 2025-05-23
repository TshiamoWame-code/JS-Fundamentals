function add(t, w) {
  return t + w;
}
const t = parseInt(process.argv[2]);
const w = parseInt(process.argv[3]);
console.log(add(t, w));