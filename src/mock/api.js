/**
 *  使用mockjs 来模拟数据
 *  https://github.com/nuysoft/Mock/wiki/Getting-Started
 * **/

import Mock from 'mockjs'

//自定义手机号码模拟
Mock.Random.extend({
    phone: function () {
        let phonePrefixs = ['188', '139', '158', '136']
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
    }
})

Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id|10001-11000": 0,
        "username": "@cname",
        "email": "admin@51purse.com",
        "phone": '@phone',
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})

