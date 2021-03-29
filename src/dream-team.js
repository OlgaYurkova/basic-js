const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false;
	}

	let nameDreamTeam = "";
	let letter;

	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] === 'string') {
			letter = members[i].trim().slice(0, 1);
			nameDreamTeam = nameDreamTeam.concat(letter);
		}
	}

	return nameDreamTeam.toUpperCase().split('').sort().join('');
};
