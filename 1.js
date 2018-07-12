//Second Great Low                                                                    *
//*  Using the JavaScript language, have the function SecondGreatLow(arr) take the array *
//*  of numbers stored in arr and return the second lowest and second greatest numbers,  *
//*  respectively, separated by a space. For example: if arr contains                    *
//*  [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and     *
//*  will contain at least 2 numbers. It can get tricky if there's just two numbers! 

const SecondGreatLow = (anArr) => {
	
//if arr only have 2 numbers, the second lowest will be the larger number and the second greatest number will be the smaller number
	anArr.sort((a,b) => a-b);
	let len = anArr.length;
	if(len === 2) return `${anArr[1]} ${anArr[0]}`;
	
//if arr has more than 2 numbers, sort the array and the second lowest will be anArr[1] and second largest will be anArr[anArr.length-2]
	let secondLowest = anArr[0];
	let lowestFlag = false
	let secondLargest = anArr[len -1];
	let greatestFlag = false;
	
	for(let i =1; i<= len-2; i++) {
		if((anArr[i] > secondLowest) && !lowestFlag) 
		{
			secondLowest = anArr[i];
			lowestFlag = true;
		}
		if((anArr[len-i-1] < secondLargest) && !greatestFlag) {
			secondLargest =anArr[len-i-1];
			greatestFlag = true;
		}
	}
	return `${secondLowest} ${secondLargest}`;
}