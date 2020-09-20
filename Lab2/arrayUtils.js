// This file implements all the LAB2 arrayUtils requirements


const mean = (arr)=>{
    if (typeof (arr) !== 'object' || arr === null ) {
		throw 'Error:Input must be non-null object'
    }
    if (arr == undefined) {
		throw 'Error:Input does not exist'
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
    result[max] = arr[max]
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
        return ' '
    }
    if (typeof (arr) !== 'object') {
		throw 'Error:Input must be non-null object'
    }
    if (arr == undefined) {
		throw 'Error:Input does not exist'
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
        arr1.sort((a,b)=>a-b);
        arr2.sort((a,b)=>a-b) ;
        if (arr1==arr2){
            return true
        }
        else{
            for(let i = 0; i<arr1.length ; i++)
            {
                arr1[i].sort((a,b)=>a-b)
                arr2[i].sort((a,b)=>a-b)
            }
            if(arr1==arr2)
            {   
                return true
            }
            else{
                return false
            }
        }

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
