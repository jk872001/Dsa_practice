let arr=[2,4,12,3,43,6,56,7,46,32,92,10]

function funcExecute()
{
    let inputValue=document.getElementById("input").value
    if(inputValue.length>0)
    {
        alert(`Arr value is ${arr[inputValue]}`)
       
    }
    else{
        alert("Please Enter valid number")
    }
   
}


// insert an element in the arr
let arr2=[2,4,12,92,16]
let newEle=10
let position=2

// logically

// for(let i=arr2.length-1;i>=position;i--)
// {
//     if(i>=position)
//     {
//         arr2[i+1]=arr2[i]
//         if(i===position)
//         {
//             arr2[i]=newEle; 
//         }
//     }
// }
// console.log(arr2);

// by method
// let value=arr2.splice(2,0,"10");
// console.log(value);

