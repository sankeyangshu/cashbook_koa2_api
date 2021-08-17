/*
 * @Description: 数据模型入口文件
 * @Author: 王振
 * @Date: 2021-07-09 10:35:05
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-17 10:34:52
 */

const User = require('./User');
const Bill = require('./Bill');
const Type = require('./Type');

// 创建外键关联,账单数据表和个人信息数据表
Bill.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = {
  User,
  Bill,
  Type,
};
