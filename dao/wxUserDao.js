const dbUtil=require("../utils/dbUtil");
var collectionName="wxUser";
var collection;
async function init(){
    if(!collection){
        console.log(collectionName,"init...");
        collection=await dbUtil.getDb().then(db=>{
            return db.collection(collectionName);
        });
    }
    return collection;
}
function add(openid,createTime){
    return collection.insert({openid,createTime});
}
function getList(){
    return collection.find({});
}
init();
module.exports={add,getList};