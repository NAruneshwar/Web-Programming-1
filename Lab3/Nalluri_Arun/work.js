const axios = require('axios');


const listEmployees = async () =>
{       
    // returns a list of employees working for any given business
    let people  = await getPeopleData();
    let data = await getWorkData();
    let result = [];

    for(k in data){
        let companydetails = data[k]['company_name']
        let employ = []
        for (i in data[k]['employees']){
            for(id in people){
                if(people[id]['id']==data[k]['employees'][i]){
                    employ.push({
                    first_name:(people[id]['first_name']),
                    last_name:(people[id]['last_name'])
                });
                }
            }
       }
       result.push({
        company_name: companydetails,
        employees: employ
       });
    }
    return result
}

const fourOneOne = async (phoneNumber) =>{
    // returns business using that phone number
    if (typeof (phoneNumber) !== 'string' || phoneNumber === null ) {
		throw 'Error:Input must be non-null string'
    }
    if (phoneNumber == undefined) {
		throw 'Error:Input does not exist'
    }
    
   let data  = await getWorkData()
   let result = {}
    for (k in data){
        if(data[k]['company_phone']==phoneNumber){
            result['company_name'] = data[k]['company_name']
            result['company_address'] = data[k]['company_address']
            return result

        }
    }
  
    throw 'No entry for that phone number'
    
}

const whereDoTheyWork = async (ssn) =>{
    // takes in SSN and returns where they work.
    if (typeof (ssn) !== 'string' || ssn === null ) {
		throw 'Error:Input must be non-null string'
    }
    if (ssn == undefined) {
		throw 'Error:Input does not exist'
    }

    let work  =  await getWorkData()
    let people = await getPeopleData()
    for(k in people){
        // console.log(people[k]['ssn'])
        if(people[k]['ssn']==ssn){
            for (i in work){
                if(work[i]['employees'].includes(people[k]['id']))
                {
                    return `${people[k]['first_name']} ${people[k]['last_name']} works at ${work[i]['company_name']}.`
                }
            }
        }
    }
    throw 'Error:No employee with the given SSN or its not in the right format of ###-###-####'
}

async function getWorkData() {
    const { data } =  await axios.get('https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json');
    return data;
  }

async function getPeopleData() {
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json');
    return data;
  }

async function main(){
    // emplist = await listEmployees();
    // console.log(JSON.stringify(emplist))
    // phone_num = await fourOneOne(); 
    // console.log(phone_num);
    // wheredothe= await whereDoTheyWork("264-67-0084")
    // console.log(wheredothe)

}


module.exports = {
    firstName: "Arun", 
    lastName: "Nalluri", 
    studentId: "10456010",
    listEmployees,
    fourOneOne,
    whereDoTheyWork
  };

main()