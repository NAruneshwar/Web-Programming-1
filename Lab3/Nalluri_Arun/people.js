const axios = require('axios');

const getPersonById = async  (id) =>{
  // function takes an id and returns the person with that id
    if (typeof (id) !== 'number' || id === null ) {
		  throw 'Error:Input must be non-null number'
    }
    if (id == undefined) {
		  throw 'Error:Input does not exist'
    }
    let { data } =  await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
    // console.log(data)
    for(k in data){
      if(data[k]['id']==id){
        return data[k]
      }
    }
    throw 'Id Not in the given file'
  }

const howManyPerState = async (abv) =>{
  // takes abrivation of state and returns no of people in that state.
  if (typeof (abv) !== 'string' || abv === null ) {
		throw 'Error:Input must be non-null string'
    }
    if (abv == undefined) {
		throw 'Error:Input does not exist'
    }
    let { data } =  await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
    // console.log(data)
    count = 0
    for(k in data){
      if(data[k]['address']['state']==abv){
        count += 1;
      }
    }
    if(count>0){
      return count
    }
    else{
      throw 'Error: No people in the given state code'
    }
}

const personByAge = async (index)=>{
  // takes an index and returns the person who is sorted by age for that index
  if (typeof (index) !== 'number' || index === null ) {
    throw 'Error:Input must be non-null number'
  }
  if(index<0){
    throw 'Error: Input can not be negitive value'
  }
  if (index == undefined) {
    throw 'Error:Input does not exist'
  }
  
  let { data } =  await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')
  let info = []
  let info_dict = {}
  let count = -1
  for (k in data){
    count++;
    info_dict['dob'] = new Date(data[k].date_of_birth);
    info_dict['id'] = data[k].id;
    info.push(info_dict);
    info_dict={}
  }
  if(index>count){
    throw 'Error: Index is out of bound'
  }
//  info_sort = info.sort((a,b)=> a-b)
  info.sort((a, b) => a.dob - b.dob)
  let person = (await getPersonById(info[index].id));
  let result = {
    first_name: person.first_name, 
    last_name: person.last_name, 
    date_of_birth: person.date_of_birth, 
    age: age(person.date_of_birth)
  }
  return result;

}

function age(human) 
{
  var person_date = new Date(human)
  var person_day = person_date.getDate()
  var person_month = person_date.getMonth()
  var person_year = person_date.getFullYear()

  var curr_date = new Date()
  var curr_day = curr_date.getDate()
  var curr_month = curr_date.getMonth()
  var curr_year = curr_date.getFullYear()

  var person_age = curr_year-person_year-1

  if(person_month<curr_month){
    person_age +=1
  }
  else if(person_month==curr_month){
    if(person_day< curr_day){
      person_age+=1
    }
  }
  return person_age
}



const peopleMetrics = async () =>{
  // calculates various metrics for the given data.

  let { data } =  await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json')

  let totalLetters =0
  let totalVowels = 0
  let totalConsonents = 0
  let longestName = ""
  let shortestName = data[0]['first_name']+' '+data[0]['last_name'];
  let mostRepeatingCity = []
  let averageAge = 0
  let peoplCount = 0
  for(let k in data){
    peoplCount+=1
    let alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // totalLetters += (data[k]['first_name']).split(/\s/).join('').length+(data[k]['last_name']).split(/\s/).join('').length
    data[k]['first_name'] = data[k]['first_name'].toLowerCase()
    data[k]['last_name'] = data[k]['last_name'].toLowerCase()
    
    averageAge += age(data[k]['date_of_birth'])

    for(let i in data[k]['first_name']){
      if(alphas.includes(data[k]['first_name'][i])){
        totalLetters +=1
      }

      if(['a','e','i','o','u'].includes(data[k]['first_name'][i]) ){
        // console.log(data[k]['first_name'][i]);
        totalVowels += 1
      }
      if(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ].includes(data[k]['first_name'][i]) ){
        // console.log(data[k]['first_name'][i]);
        totalConsonents += 1
      }
    }
    for(let i in data[k]['last_name']){
      if(alphas.includes(data[k]['last_name'][i])){
        totalLetters +=1
      }
      // console.log(data[k]['last_name'][i])
      if(['a','e','i','o','u'].includes(data[k]['last_name'][i])){
        // console.log(data[k]['last_name'][i]);
        totalVowels += 1
      }
      if(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ].includes(data[k]['last_name'][i])){
        // console.log(data[k]['first_name'][i]);
        totalConsonents += 1
      }
    }
    if(longestName.length <= data[k]['first_name'].length+data[k]['last_name'].length+1){
      longestName = data[k]['first_name']+' '+data[k]['last_name']
    }
    if(shortestName.length >= data[k]['first_name'].length+data[k]['last_name'].length+1){
      shortestName = data[k]['first_name']+' '+data[k]['last_name']
    }
    if(mostRepeatingCity[data[k]['address']['city']]){
      mostRepeatingCity[data[k]['address']['city']] +=1
    }
    else{
      mostRepeatingCity[data[k]['address']['city']] =1
    }
  }
  mostRepeatingCity = Object.keys(mostRepeatingCity).reduce(function(a, b){ return mostRepeatingCity[a] > mostRepeatingCity[b] ? a : b });


  averageAge = (averageAge/peoplCount).toFixed(2)

  let result = {
    totalLetters: totalLetters,
    totalVowels: totalVowels,
    totalConsonants: totalConsonents,
    longestName: longestName,
    shortestName: shortestName,
    mostRepeatingCity: mostRepeatingCity,
    averageAge: averageAge

  }

  return result
}





async function main(){
  // let persondetails =  await getPersonById(43);
  // console.log(persondetails); 
  // let getperson = await getPersonById(-1);
  // console.log(getperson);   
  //  getperson = await getPersonById(1001); 
  // console.log(getperson);   
  //  getperson = await getPersonById();
  // console.log(getperson)
  // let perstate = await howManyPerState('-1');
  // console.log(perstate)
  // let peopleMets = await personByAge();
  // console.log(peopleMets)
  // let metrics = await peopleMetrics()
  // console.log(metrics);
  // // console.log("NADA!")
}

module.exports = {
  firstName: "Arun", 
  lastName: "Nalluri", 
  studentId: "10456010",
  getPersonById,
  howManyPerState,
  personByAge,
  peopleMetrics
};


main()