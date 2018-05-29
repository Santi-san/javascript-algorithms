//function allanagrams(string){
//
// if(string.length === 0) return [''];
//   var result = {};
//   string.split('').forEach(function(letter,i){
//         var remainingLetters = string.slice(0,i) + string.slice(i+1);
//
//          allanagrams(remainingLetters).forEach(
//              function(anagram){
//          result[letter+anagram] = true;
//});
//});
//        //return Object.keys(result);
//	  console.log(result);
//}
//
//var str = 'sam';
//allanagrams(str);
//   
//                       //Using Backtracking algorithm
//

function swap (alphabets, index1, index2) {
  var temp = alphabets[index1];
  alphabets[index1] = alphabets[index2];
  alphabets[index2] = temp;
  return alphabets;
}

function permute (alphabets, startIndex, endIndex) {
  if (startIndex === endIndex) {
	console.log(alphabets.join(''));
  } else {
    var i;
    for (i = startIndex; i <= endIndex; i++) {
      swap(alphabets, startIndex, i);
      permute(alphabets, startIndex + 1, endIndex);
      swap(alphabets, i, startIndex); // backtrack
    }
  }
}

var alphabets = ['A','B','C'];
permute(alphabets, 0, alphabets.length-1); // ABC, ACB, BAC, BCA, CBA, CAB