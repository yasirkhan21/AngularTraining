var sort=(arr:number[])=>{
     for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        
     }
    console.log(arr);   
}

var arr:number[]=[50,10,40,30,20];
sort(arr);
