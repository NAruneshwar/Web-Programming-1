// This file implements all the LAB2 StringUtils requirements


const camelCase = (string) =>
{   if (typeof (string) !== 'string' || string === null ) {
    throw 'Error:Input must be non-null string'
    }
    if (string == undefined) {
        throw 'Error:Input does not exist'
    }

    string = string.toLowerCase();
    str = string.split(" ");
    let result = str[0];
    for(let i = 1; i<str.length; i++){
        str[i]=str[i][0].toUpperCase() + str[i].slice(1,);;
        result+=str[i]
    }
    return result;
}

const replaceChar = (string) =>
{   if (typeof (string) !== 'string' || string === null ) {
    throw 'Error:Input must be non-null string'
    }
    if (string == undefined) {
        throw 'Error:Input does not exist'
    }
    let result = string[0];
    let splchar = string[0];
    let splcharLC = string[0].toLowerCase();
    let location = 0;
    for(let i =1; i<string.length; i++ ){
        if(string[i]== splchar || string[i] == splcharLC){
            if(location %2 ==0)
            {
                result+= '*';
                location++;
            }
            else{
                result+= '$';
                location++;
            }
        }else{
            result+= string[i];
        }
    }
    return result
}

const mashUp = (string1, string2) =>
{   if (typeof (string1) !== 'string' || string1 === null ) {
    throw 'Error:Input string1 must be non-null string';
    }
    if (typeof (string2) !== 'string' || string2 === null ) {
        throw 'Error:Input string2 must be non-null string';
        }
    if (string1 == undefined) {
        throw 'Error:Input for string1 does not exist';
    }
    if (string2 == undefined) {
        throw 'Error:Input for string2 does not exist';
    }

    if(string1.length>1 && string2.length>1)
    {
        let result1 = string2.slice(0,2);
        result1 += string1.slice(2,)
        result1 += " " +string1.slice(0,2);
        result1 += string2.slice(2,)
        return result1
    }
    else{
        throw "Error: Not enough inputs given for MashUp Function";
    }
  
}


module.exports = {
    firstName: "Arun", 
    lastName: "Nalluri", 
    studentId: "10456010",
    camelCase,
    replaceChar,
    mashUp
}; 

