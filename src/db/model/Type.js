/*
 * @Description: 账单标签数据模型
 * @Author: 王振
 * @Date: 2021-08-17 09:45:26
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-17 10:34:50
 */

const seq = require('../seq');
const { STRING, DECIMAL, INTEGER } = require('../types');

// types数据库表，sequelize会在数据库中自动以复数建表
const Type = seq.define('type', {
  typeName: {
    type: STRING,
    allowNull: false,
    comment: '标签名称',
  },
  type: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 1,
    comment: '标签类型',
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '保留字段，设置该标签的用户归属',
  },
});

module.exports = Type;
