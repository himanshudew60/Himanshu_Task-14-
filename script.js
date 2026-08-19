function division(num1,num2){
    const promise = new Promise((resolve,reject)=>{
        if(num2==0){
            reject("Cannot divide by zero");
        }
        else{
            resolve(num1/num2);
        }

    });
    return promise;
}

division(10,2)
.then((result)=>{
   console.log("Successfully Divided Result is :",result);
}).catch((error)=>{
    console.log(error);
});