function getZerosCount(number) {
	var number = 95670627;
	var n = 5;
	var result = 0;
	while(number > n){
		result = result + Math.floor(number / n);
		n = n * 5;
	}

	console.log(result);
}

getZerosCount();
