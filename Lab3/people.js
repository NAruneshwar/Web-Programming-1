const getPersonById = (id) =>{
    if (typeof (id) !== 'number' || id === null ) {
		throw 'Error:Input must be non-null number'
    }
    if (id == undefined) {
		throw 'Error:Input does not exist'
    }
    

}

await getPersonById(43); 
// \\ Returns: 
// {  
//   id: 43,  
//   first_name: "Tades",  
//   last_name: "Paskell",  
//   date_of_birth: "01/02/1987",  
//   ssn: "648-97-2273",  
//   email: "tpaskell16@cam.ac.uk",  
//   ip_address: "72.63.45.5",  
//   address: {   
//     street_address: "6 South Plaza",   
//     city: "Huntsville",   
//     state: "AL",   
//     zip_code: "35810"  
//   } 
// }
await getPersonById(-1); \\ Throws Error 
await getPersonById(1001); \\ Throws Error 
await getPersonById();\\ Throws Error