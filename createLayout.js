function createChartsLayout(formCol, layoutOpt, excludeCol) {
	screenWidth = $(window).width();
	console.log(screenWidth);

	console.log(excludeCol);

	formCol = formCol.filter(function(col) {
		return !(excludeCol.includes(col));
	});

	// console.log(formCol);
	

}