module.exports = function multiply(first, second) {
  let a = BigInt(first);
  let b = BigInt(second);
  let product = a * b;
  return product.toString();
}