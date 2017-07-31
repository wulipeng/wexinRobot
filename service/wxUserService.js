var wxUserDao = require("../dao/wxUserDao");

/**
 * add one user
 * @param {string} openid
 * @param {number} createTime
 */
function add(params) {
    if (!params || !params.FromUserName || !params.CreateTime) {
        return Promise.reject("参数不全");
    }
    return wxUserDao.add(params.FromUserName, params.CreateTime);
}

/**
 * getAllUser
 */
function getList() {
    return wxUserDao.getList();
}
function remove(params){
    if(!params || !params.FromUserName){
        return Promise.reject("arguments");
    }
    return wxUserDao.remove(params.FromUserName);
}
module.exports = {add, getList,remove};