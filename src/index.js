module.exports = function zeros(exp) {
  exp = exp.split("*");
  var k, mult;
  for (let i = 0; i < exp.length; i++) {
    k = (exp[i][exp[i].length - 2] == "!") ? 2 : 1;
    exp[i] = exp[i].slice(0, exp[i].length - k);
    for (let j = exp[i] - k; j > 1; j -= k) {
      exp[i] = multiply(exp[i], j.toString());
    }
  }
  mult = exp[0];
  for (let i = 1; i < exp.length; i++) {
    mult = multiply(mult, exp[i]);
  }
  for (i = mult.length - 1; i > 0 && mult[i] == "0"; i--);
  return mult.length - i - 1;
}

function multiply(a, b) {
  if (a == 0 || b == 0) return "0";
  a = a.split("");
  b = b.split("");
  a = a.reverse();
  b = b.reverse();
  if (a.length > b.length) {
    t = a;
    a = b;
    b = t;
  }
  var n = a.length, m = b.length, p = new Array(m * 2);
  for (let i = 0; i < p.length; i++) p[i] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      p[i + j] += a[i] * b[j];
    }
  }
  for (let i = 0; i < p.length; i++) {
    if (p[i] > 9) {
      p[i + 1] += Math.floor(p[i] / 10);
      p[i] = p[i] % 10;
    }
  }
  for (let i = p.length - 1; i > 0 && p[i] == 0; i--) p.pop();
  p = p.reverse();
  return p.join("");
}
