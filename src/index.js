module.exports = function zeros(exp) {
	exp = exp.split("*");
	var n = exp.length, number2 = 0, number5 = 0;
	for (let i = 0; i < n; i++) {
		let k = (exp[i][exp[i].length - 2] == "!") ? 2 : 1;
		exp[i] = parseInt(exp[i]);
		for (let j = exp[i]; j > 1; j -= k) {
			let temp = j
			while (temp % 5 == 0) {
				number5++;
				temp /= 5;
			}
			while (temp % 2 == 0) {
				number2++;
				temp /= 2;
			}
		}
	}
	return Math.min(number2, number5);
}
