/*
Aruneshwar Nalluri Lab 1
*/


const questionOne = function questionOne(arr) {
    // the function takes an input of array of numbers and returns a dictionary of numbers along with if the number is prime or not.

    let result = {};
    for (let k = 0; k < arr.length; k++){
        if(primeVar(arr[k])){
            result[arr[k]]= true;
        }
        else{
            result[arr[k]] = false;
        }
    }
    return result;
}

    function primeVar(a) {
    // the function takes a number as input and returns if it's prime or not.
    if(a<=1)
    {
        return false;
    }
    {   let x = 1
        for(let l = 2; l<a; l++)
        {
            if(a%l==0)
            {
                x++;
            }
            if(x>1)
            {
                return false;
            }
        }
        return true;
    }
}

const questionTwo = function questionTwo(arr) { 
    //takes an array as input and returns after perfoming mathematical calculations.

    result = 0
    for (let k = 0; k < arr.length; k++){
        result += arr[k]**2
    }
    result = result**6
    return Math.sqrt(result);
}

const questionThree = function questionThree(text) {
    //takes a sentence as input and returns a dictionary of number of constants, vowels etc in the given sentence.

    result = {consonants: 0,  vowels: 0,  numbers: 0, spaces: 0,  punctuation: 0, specialCharacters: 0}
    text = text.toLowerCase();
    let vowel = ['a','e','i','o','u'];
    let consts = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y','z'];
    let nums = ['1','2','3','4','5','6','7','8','9','0'];
    let punctuations = [ '’', '(', ')',':',',','—','“','”','‘','!','.','-','?',';','/','[',']', '\''];
    let splcars = ['<','>', '*', '\\','{','}','"','#','$','%','&','*','+','.','/','<','=','>','@','^','_','`','{','|','}','~'];
 
    for(let k = 0; k<text.length; k++){
        if(text[k]== ' ')
            result['spaces']+=1;
        if(vowel.includes(text[k]))
            result['vowels']+=1;
        else if(consts.includes(text[k]))
            result['consonants']+=1;
        else if(nums.includes(text[k]))
            result['numbers']+=1;
        else if(punctuations.includes(text[k]))
            result['punctuation']+=1;
        else if(splcars.includes(text[k]))
            result['specialCharacters']+=1;
    }
    return result;
}

const questionFour = function questionFour(num1, num2,num3) {
    //function takes principle, APR, length of loan to return the monthly EMI that a person pays. 

    if (num1<1 || num3<1){
        return 0
    }

    if(num2 == 0){
        return (num1/(num3*12)).toFixed(2);
    }

    numerator = num1*((num2/100)/12);
    denominator = 1- [(1+(num2/100)/12)**(-12*num3)];
    return (numerator/denominator).toFixed(2);
}

module.exports = {
    firstName: "Arun", 
    lastName: "Nalluri", 
    studentId: "10456010",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};