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