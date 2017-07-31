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
    return collection.insert({openid,createTime,deleted:false});
}
function getList(){
    return collection.find({});
}

/**
 * 并不是真正的删除
 * @param openid
 */
function remove(openid){
    return collection.update({openid:openid,deleted:false},{$set:{deleted:true}});
}
init();
module.exports={add,getList,remove};