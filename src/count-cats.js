const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let arr = matrix.flat();
	return arr.filter(x => x === "^^").length;
};
