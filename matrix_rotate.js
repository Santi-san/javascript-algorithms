
                                  //hutleys method


											  function rotateClockwise(matrix) {
  var theta = matrix.reduce((omega,alpha) => omega.concat(alpha));
  var delta = [];
  for(x = 0; x < matrix[0].length; x++) {
      i = x;
     delta[x] = [];
      while(i < theta.length) {
        delta[x].push(theta[i]);
        i += matrix[0].length;
      }
      delta[x].reverse();
   }
return delta;
}

var a =[
	[1,2,4],
	[5,6,7],
	[8,9,1]
]
//console.log(rotateClockwise(a));

//for anticlockwise


var arr = [[2,3,4],
           [5,6,7],
           [0,9,2]];

           //[2,3,4,5,6,7,0,9,2]


function rotate(arr){
     var result = [];
      
      var theta = arr.reduce((acc,value)=>acc.concat(value));

      for(let i=0;i<arr[0].length;i++){

          let x = arr[0].length-1-i;
		  
           result[i]=[];
          while(x<theta.length){
             result[i].push(theta[x]);
             x +=arr[0].length; 
          }
         // result[i].reverse();
      }
      return result;
}
console.log(rotate(arr));