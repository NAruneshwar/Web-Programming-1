// This file implements all the LAB2 arrayUtils requirements


const mean = (arr)=>{
    if(!Array.isArray(arr)){
        throw 'Error: Input is not a list'
    }
    if (typeof (arr) !== 'object' || arr === null ) {
		throw 'Error:Input must be non-null object'
    }
    if (arr == undefined) {
		throw 'Error:Input does not exist'
    }
    if (arr.length==0){
        throw 'Error the array given was empty'
    }
  
    let total = arr.reduce(function(a, b){
        if(typeof(a)!="number"||typeof(b)!="number"){
            throw 'Error:Input should contain only an array of numbers'
        }
        return a + b;
    }, 0); 
    return total/ arr.length
}

const medianSquared = (arr) =>{
    if (typeof (arr) !== 'object' || arr === null ) {
		throw 'Error:Input must be non-null object'
    }
    if (arr == undefined) {
		throw 'Error:Input does not exist'
    }
    if (arr.length==0){
        throw 'Error the array given was empty'
    }

    arr.sort((a,b)=>a-b);
    if(arr.length %2 ==0)
        {
            return ((arr[(arr.length)/2]+arr[(arr.length/2)-1])/2)**2
        }
    else{
        return (arr[Math.floor(arr.length/2)])**2
    }
}

const maxElement = (arr) =>{
    if (typeof (arr) !== 'object' || arr === null ) {
		throw 'Error:Input must be non-null object'
    }
    if (arr == undefined) {
		throw 'Error:Input does not exist'
    }
    if (arr.length==0){
        throw 'Error the array given was empty'
    }
    let max = 0
    for(let i=1; i<arr.length; i++){
        if(typeof(arr[i])!="number"){
            throw 'Error:Input should contain only an array of numbers'
        }
        if (arr[i]>arr[max]){
            max=i;
        }
    }
    let result = {}
    result[arr[max]] = max
    return result
}

const fill = (end,value) =>{
    if (typeof (end) !== 'number' || end === null ) {
		throw 'Error:Input must be non-null number'
    }
    if (end == undefined) {
		throw 'Error:Input does not exist'
    }
    
    if (end<1){
        throw 'Error: the input value provided should be greater than 0'
    }
    let result = []
    if(value){
        for(let i=0; i<end; i++){
            result[i]=value
        } 
    }
    else{    
        result = []
        for(i=0; i<end; i++){
            result[i]=i
        }
    }
    return result;
}



const countRepeating = (arr) =>
{
    if(arr == null){
        throw 'Error: No Input given'
    }
    if (typeof (arr) !== 'object') {
		throw 'Error:Input must be non-null object'
    }
    if (arr == undefined) {
		throw 'Error:Input does not exist'
    }
    if (arr.length == 0){
        throw 'Error: No inputs given given'
    }
    let result = {}
    let initial={}
    
    for(let i=0; i<arr.length; i++){
       
        if(initial[arr[i]]){
            initial[arr[i]]+=1;
            result[arr[i]]= initial[arr[i]];
        }
        else{
            initial[arr[i]]=1;
        }
    }
    return result;
}

const isEqual = (arr1, arr2)=>
{
    let new_arr1 = []
    let new_arr2 = []

    if (typeof (arr1) !== 'object' || arr1 === null ) {
		throw 'Error:Input arr1 must be non-null object'
    }
    if (arr1 == undefined) {
		throw 'Error:Input arr1 does not exist'
    }
    if (typeof (arr2) !== 'object' || arr2 === null ) {
		throw 'Error:Input arr2 must be non-null object'
    }
    if (arr2 == undefined) {
		throw 'Error:Input arr2 does not exist'
    }

    if (arr1.length != arr2.length){
        return false
    }
    else{
        for(let i = 0; i<arr1.length ; i++){
            if(Array.isArray(arr1[i])){
                new_arr1.push(arr1[i].sort());
            }else{
                new_arr1.push(arr1[i]);
            }
            if(Array.isArray(arr2[i])){
                new_arr2.push(arr2[i].sort());
                }else{
                    new_arr2.push(arr2[i]);
                }
        }
        return JSON.stringify(new_arr1.sort())===JSON.stringify(new_arr2.sort());

        

    }
}


module.exports = {
    firstName: "Arun", 
    lastName: "Nalluri", 
    studentId: "10456010",
    mean,
    medianSquared,
    fill,
    maxElement,
    countRepeating,
    isEqual
};
