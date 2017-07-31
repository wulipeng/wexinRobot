var dbUtil=require("../utils/dbUtil");
var collectionName="wxMsg";
var collection;
async function init(){
    if(!collection){
        console.log(collectionName,"init...");
        db=await dbUtil.getDb();
        collection=db.collection(collectionName);
    }
    return collection;
}
/**
 * 将数据添加到mongodb
 * @param {object} [data]
 * @returns {boolean}
 */
function add(data){
    return collection.insert(data,{safe:true});
}
init();
module.exports={add};