const express = require("express");
const wechat = require("wechat");
const weixinCfg = require("../configs/weixin");
const wxMsgService = require("../service/wxMsgService");
const wxUserService = require("../service/wxUserService");
var router = express.Router();
//  测试环境，直接用token吧
router.all("/", wechat(weixinCfg, function (req, res, next) {
    console.log(req.weixin);
    wxMsgService.add(req.weixin).then(function (result) {
        switch (req.weixin.MsgType) {
            case"event":
                switch(req.weixin.Event){
                    case "subscribe":
                        wxUserService.add(req.weixin).then(function(result){
                            res.reply("谢谢关注我");
                        }).catch(function(error){
                            res.reply("请重新关注");
                        });
                    break;
                    case "unsubscribe":
                        wxUserService.remove(req.weixin).then(function(result){
                            console.log("取消关注成功");
                            res.reply("感谢关注我");
                        }).catch(function(error){
                            console.log("取消关注失败",error);
                            res.reply("取消关注失败"+error);
                        });
                        break;
                }
                break;
            default:
                res.reply(JSON.stringify(req.weixin));
                break;
        }
    }).catch(function (error) {
        res.reply(error);
    });

}));

module.exports = router;