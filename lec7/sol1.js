
const sqrt = (x)=>{
    return cal(1,x,x)
};


function cal(s,e,x){
    while(s<=e)
    {
        let mid=Math.floor(s+(e-s)/2)
        if(mid*mid===x)
        {
            return mid;
        }
    }
}








console.log(sqrt(4))