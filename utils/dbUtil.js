const mongodb=require("mongodb");
const config=require("../configs/mongodb");
var db;
async function getDb(){
    if(!db){
        console.log("mongodb init...");
        let opts={};
        db=await (new mongodb.MongoClient()).connect(config.url,opts);
    }
    return db;
}
function closeDb(){
    if(db){
        db.then(db=>{db.close();});
    }
}
module.exports={getDb,closeDb};