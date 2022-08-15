const arr1 = [2,5,1,4,9,6,8,7,3]
const arr2 = [3,7,8,5,4,1,9,0]
  
function quickSort(arr) {
   
    if (arr.length <= 1)
     return arr;

    const pivot = arr[0];
  
    const leftItems = [];
    const rightItems = [];
  
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            leftItems.push(arr[i])
        }
        else{
            rightItems.push(arr[i]);
        }
        
      }
  
      return quickSort(leftItems).concat(pivot, quickSort(rightItems));
  }
  console.log(quickSort(arr1))
  console.log(quickSort(arr2))


  