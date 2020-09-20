// This file implements all the LAB2 ObjUtils requirements

const makeArrays = (objects) =>{
    if (typeof (objects) !== 'object' || objects === null ) {
		throw 'Error:Input must be non-null object'
    }
    if (objects == undefined ) {
		throw 'Error:Input does not exist'
    }
    if(Object.keys(objects).length<2){
        throw 'Error: There should be atleast 2 elements in object'
    }
    let result = []
    objects.forEach(ele => {
        for(let item in ele){
            result.push([item,ele[item]]);
        }
    });
    return result

}


const isDeepEqual = (obj1, obj2) =>{
    if (obj1 == undefined ) {
		throw 'Error:Input obj1 does not exist'
    }
    if (obj2 == undefined ) {
		throw 'Error:Input obj2 does not exist'
    }
    if (typeof (obj1) !== 'object' || obj1 === null ) {
		throw 'Error:Input obj1 must be non-null object'
    }
    if (typeof (obj2) !== 'object' || obj2 === null ) {
		throw 'Error:Input obj2 must be non-null object'
	}

    if(Object.keys(obj1).length==Object.keys(obj2).length){
        for (let key in obj1){
            if(Object.keys(obj1[key]).length>1){
                if(!isEqual(obj1[key], obj2[key])){
                    return false
                }
            }
        else
            if(obj1[key]!=obj2[key]){
                return false
            }
        

        }
        return true
    }
    else{
        return false
    }
}

function isEqual(ob1,ob2){
    for (let key in ob1){
        if(Object.keys(ob1[key]).length>1){
            return isEqual (ob1[key],ob2[key])
        }
        else if(ob1[key]!=ob2[key]){
            return false
        }
    }
    return true
}



const computeObject = (object, func)=>{
    if (object == undefined || func == undefined) {
		throw 'Error:Input does not exist'
    }
    if (typeof (object) !== 'object' || object === null) {
		throw 'Error:Input object must be non-null object'
    }
    if (typeof(func) !== "function" || typeof(func) === null) {
		throw 'Error:Input Function must be non-null function'
	}
    result = {}
    for (k in object) {
        result[k] = func(object[k]);

    }
    return result
}



module.exports = {
    firstName: "Arun", 
    lastName: "Nalluri", 
    studentId: "10456010",
    makeArrays,
    isDeepEqual,
    computeObject
};

