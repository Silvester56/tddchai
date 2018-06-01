function Tools(){
}

Tools.prototype.even = function () {
	return Math.floor(Math.random() * 10) * 2;
};

Tools.prototype.odd = function () {
	return Math.floor(Math.random() * 10) * 2 + 1;
};

Tools.prototype.percentage = function (part, whole) {
	return part * 100 / whole;
};

Tools.prototype.toComplex = function (r, i) {
	return {realPart: r, imaginaryPart: i};
};

Tools.prototype.average = function (array) {
	if (array.length > 0) {
		return array.reduce((acc, value) => acc + value) / array.length;
	}
	return 0;
};

Tools.prototype.randomize = function (str) {
	let tab = str.split('');
	let res = [];
	let index = 0;

	while (tab.length > 0) {
		index = Math.floor(Math.random() * tab.length - 1);
		res.push(tab.splice(index, 1));
	}

	return res.join('');
};

Tools.prototype.removeDoubles = function (str) {
	for (let i = 0; i < str.length; i++) {
		str = str.replace(str.charAt(i), '');
	}
	return str;
};

Tools.prototype.splitInParts = function (str, nb) {
	let strlen = str.length / nb;
	let res = [];

	for (let i = 0; res.length < nb; i++) {
		res.push(str.slice(i * strlen, (i + 1) * strlen));
	}

	return res;
};

module.exports = Tools;
