var wxMsgDao=require("../dao/wxMsgDao");
function add(params) {
    if(!params){
        return;
    }
    return wxMsgDao.add(params);
}
module.exports={add};