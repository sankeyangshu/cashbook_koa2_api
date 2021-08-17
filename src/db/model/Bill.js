/*
 * @Description: 账单数据模型
 * @Author: 王振
 * @Date: 2021-08-17 09:38:32
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-17 10:34:48
 */

const seq = require('../seq');
const { STRING, DECIMAL, INTEGER } = require('../types');

// bills数据库表，sequelize会在数据库中自动以复数建表
const Bill = seq.define('bill', {
  payType: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3,
    comment: '账单类型（ 1 为支出，2 为收入）',
  },
  amount: {
    type: INTEGER,
    allowNull: false,
    comment: '账单价格',
  },
  date: {
    type: STRING,
    allowNull: false,
    comment: '账单日期',
  },
  typeId: {
    type: INTEGER,
    allowNull: false,
    comment: '账单标签 id',
  },
  typeName: {
    type: STRING,
    allowNull: false,
    comment: '账单标签名称',
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '账单归属的用户 id',
  },
  remark: {
    type: STRING,
    comment: '账单备注',
  },
});

module.exports = Bill;
