var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1.for ...loop:

// for (var x = 0 ; x < arr.length;x++){
//     console.log(arr[x]);
// }

//2. forEach...

// arr.forEach(function (element){
//     console.log(element)
// });

//3. forin..

// for(var x in arr){
//     console.log(x)
// }


//4. for..of

for(var x of arr){
    console.log(x)
}