const maskSpecial = (value: string): string => {
	if (value === "0") {
		return "0,00";
	}
	return value.replace(/\D/g, "");
};

const maskCurrency = (value: string): string => {
	if (value === "0") {
		return "0,00";
	}
	return value
		.replace(/\D/g, "")
		.replace(/(\d)(\d{2})$/, "$1.$2")
		.replace(/(?=(\d{3})+(\D))\B/g, ",");
};

export {
	maskCurrency,
	maskSpecial
}
