// Test cases for LAB 3
const people = require("./people");
const work = require("./work");
async function main(){

try {
    // Should Pass
    const peopleone = await people.getPersonById(43); 
    const peopletwo = await people.getPersonById(999);
 
    console.log('getPersonById passed successfully');
 } catch (e) {
    console.error('getPersonById failed test case');
 }
 try {
    // Should Fail
    const peoplethree =  await people.getPersonById(-1); 
    console.error('getPersonById did not error');
 } catch (e) {
       console.log('getPersonById failed successfully');
 }
try {
    // Should Fail
    const peoplefour = await people.getPersonById(1001); 
    console.error('getPersonById did not error');
 } catch (e) {
       console.log('getPersonById failed successfully');
 }
try {
    // Should Fail
    const peoplefive = await people.getPersonById(); 
    console.error('getPersonById did not error');
} catch (e) {
    console.log('getPersonById failed successfully');
}




try {
    // Should Pass
    const perstateone = await people.howManyPerState("NY"); 
    const perstatetwo = await people.howManyPerState("CO");
 
    console.log('howManyPerState passed successfully');
 } catch (e) {
    console.error('howManyPerState failed test case');
 }
 try {
    // Should Fail
    const perstatethree =  await people.howManyPerState(-1); 
    console.error('howManyPerState did not error');
 } catch (e) {
       console.log('howManyPerState failed successfully');
 }
try {
    // Should Fail
    const perstatfour = await people.howManyPerState("WY"); 
    console.error('howManyPerState did not error');
 } catch (e) {
       console.log('howManyPerState failed successfully');
 }
try {
    // Should Fail
    const perstatefive = await people.howManyPerState(); 
    console.error('howManyPerState did not error');
} catch (e) {
    console.log('howManyPerState failed successfully');
}





try {
    // Should Pass
    const perstateone = await people.personByAge(0); 
    const perstatetwo = await people.personByAge(999);
 
    console.log('personByAge passed successfully');
 } catch (e) {
    console.error('personByAge failed test case');
 }
 try {
    // Should Fail
    const perstatethree =  await people.personByAge(-1); 
    console.error('personByAge did not error');
 } catch (e) {
       console.log('personByAge failed successfully');
 }
try {
    // Should Fail
    const perstatfour = await people.personByAge(1000); 
    console.error('personByAge did not error');
 } catch (e) {
       console.log('personByAge failed successfully');
 }
try {
    // Should Fail
    const perstatefive = await people.personByAge(); 
    console.error('personByAge did not error');
} catch (e) {
    console.log('personByAge failed successfully');
}


try {
    // Should Pass
    const peopleMetricsone = await people.peopleMetrics(); 
 
    console.log('peopleMetrics passed successfully');
 } catch (e) {
    console.error('peopleMetrics failed test case');
 }




try {
    // Should Pass
    const listEmployees = await work.listEmployees(); 
    console.log('listEmployees passed successfully');
} catch (e) {
    console.error('listEmployees failed test case');
}






try {
    // Should Pass
    const fourOneone = await work.fourOneOne('240-144-7553'); 
    const fourOnetwo = await work.fourOneOne('786-801-4968');
 
    console.log('fourOneOne passed successfully');
 } catch (e) {
    console.error('fourOneOne failed test case');
 }
 try {
    // Should Fail
    const fourOnethree =  await work.fourOneOne('212-208-8374'); 
    console.error('fourOneOne did not error');
 } catch (e) {
       console.log('fourOneOne failed successfully');
 }
try {
    // Should Fail
    const fourOnefour = await work.fourOneOne('5045890047'); 
    console.error('fourOneOne did not error');
 } catch (e) {
       console.log('fourOneOne failed successfully');
 }
try {
    // Should Fail
    const fourOnefive = await work.fourOneOne(); 
    console.error('fourOneOne did not error');
} catch (e) {
    console.log('fourOneOne failed successfully');
}






try {
    // Should Pass
    const whereDoTheyWorkone = await work.whereDoTheyWork('299-63-8866'); 
    const whereDoTheyWorktwo = await work.whereDoTheyWork('277-85-0056');
 
    console.log('whereDoTheyWork passed successfully');
 } catch (e) {
    console.error('whereDoTheyWork failed test case');
 }
 try {
    // Should Fail
    const whereDoTheyWorkthree =  await work.whereDoTheyWork(); 
    console.error('whereDoTheyWork did not error');
 } catch (e) {
       console.log('whereDoTheyWork failed successfully');
 }
try {
    // Should Fail
    const whereDoTheyWorkfour = await work.whereDoTheyWork('123456789'); 
    console.error('whereDoTheyWork did not error');
 } catch (e) {
       console.log('whereDoTheyWork failed successfully');
 }
try {
    // Should Fail
    const whereDoTheyWorkfive = await work.whereDoTheyWork('264-67-0084'); 
    console.error('whereDoTheyWork did not error');
} catch (e) {
    console.log('whereDoTheyWork failed successfully');
}

    // try{
    //     const peopledata = await people.getPeople();
    //     console.log (peopledata);
    // }catch(e){
    //     console.log (e);
    // }
}

//call main
main();