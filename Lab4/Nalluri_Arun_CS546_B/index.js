const movies = require("./data/movies")
const DBConnect = require("./config/mongoConnection");

async function main() {
    try{
        var NowYouSeeMe = await movies.create("Now You See Me","Charismatic magician Atlas (Jesse Eisenberg) leads a team of talented illusionists called the Four Horsemen","PG-21", "2hr 05min","Thriller/Mystery ",["Jesse Eisenberg","Isla Fisher","Mark Rufellow"],{director: "Leterrier", yearReleased: 2013});
        console.log(NowYouSeeMe);
    }
    catch(e){
        console.error('Movie Creating failed test case');
    }
    try{
        var MIRN = await movies.create("Mission Impossible: Ghost Protocol","Blamed for a terrorist attack on the Kremlin, Ethan Hunt (Tom Cruise) and the entire IMF agency are disavowed by the U.S. government, while the president initiates the Ghost Protocol. Forced to go off the grid","PG-9", "2hr 18min","Action/Spy",["Tom Cruise","Jeremy Renner"],{director: "Brad Bird", yearReleased: 2011});
        console.log(MIRN);
    }
    catch(e){
        console.error('Movie Creating failed test case')
    }
    try{
        var dispall = await movies.getAll();
        console.log(dispall);
    }
    catch(e){
        console.error("Display all failed testcase")
    }
    try{
        var Bahu = await movies.create("Baahubali: The Beginning","In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy.","PG-45", "2hr 39min","Action/War",["Prabas","RANA"],{director: "S. S. Rajamouli", yearReleased: 2015});
        console.log(Bahu)
    }
    catch(e){
        console.error('Movie Creating failed test case')
    }
    // console.log(NowYouSeeMe['_id']);
    try{
        var rename = await movies.rename(NowYouSeeMe['_id'], 'this is a good movie!?!')
        console.log(rename)
    }
    catch(e){
        console.error('Renaming movies failed testcase')
    }
    try{
        var removeMovie = await movies.remove(MIRN['_id'])
        console.log(removeMovie)
    }
    catch(e){
        console.error('Removing movies failed testcase')
    }
    try{
        console.log(await movies.getAll())
    }
    catch(e){
        console.error('Displaying all the movies failed testcase')
    }
    try{
        var newmovie = await movies.create("   ","PG-45", "2hr 39min","Action/War",["Prabas","RANA"],{director: "S. S. Rajamouli", yearReleased: 2015});
        console.error("creting movie didnt error")
    }catch(e){
        console.log("Creting Movies Failed successfully")
    }
    try{
        var removefail = await movies.remove('5f77f00c9K81e23c45c2fe67');
        console.error("remove movie didnt error")
    }catch(e){
        console.log("remove Movies Failed successfully")
    }
    try{
        var renamefail = await movies.rename('5f77f00c9K81e23c45c2fe67', 'this is a good movie!?!');
        console.error("Renaming movie didnt error")
    }catch(e){
        console.log("Renaming Movies Failed successfully")
    }
    try{
        var renamefail = await movies.rename(Bahu['_id'], ['aegbagdln','eagjsnmsdgln']);
        console.error("Renaming movie didnt error")
    }catch(e){
        console.log("Renaming Movies Failed successfully")
    }
    try{
        var getfail = await movies.get('5f77f0c45c2fe67');
        console.error("get movie didnt error")
    }catch(e){
        console.log("get Movies Failed successfully")
    }
    

    const db = await DBConnect();
    await db.serverConfig.close();


    console.log("connection closed successfully");
    

};
main().catch((error) => {
    console.log(error);
});
