


//
//var isAscending = a => a.slice(1)
//                        .map((e,i) => e > a[i])
//                        .every(x => x);
//                        
//console.log(isAscending([1,2,3,4]));
////console.log(isAscending([1,2,5,4]));
//

var str = [1,3,4,5];

function isAscending(str){
	return str.slice(1).map(function(e,i){
		return e > str[i];
	});
}

console.log(isAscending(str));
