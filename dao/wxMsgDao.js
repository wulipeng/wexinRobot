var dbUtil=require("../utils/dbUtil");
function add(data){
    return dbUtil.getDb().then(db=>{
      db.insert(data);
    });
}