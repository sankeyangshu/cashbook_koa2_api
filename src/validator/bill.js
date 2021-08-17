/*
 * @Description: bill 数据格式校验
 * @Author: 王振
 * @Date: 2021-08-17 13:39:17
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-17 13:44:15
 */

const validate = require('./_validate');

// 校验规则
const SCHEMA = {
  type: 'object',
  properties: {
    amount: {
      type: 'number',
    },
    date: {
      type: 'string',
      maxLength: 255,
    },
    typeId: {
      type: 'number',
    },
    typeName: {
      type: 'string',
      maxLength: 255,
    },
    userId: {
      type: 'number',
    },
    remark: {
      type: 'string',
      maxLength: 255,
    },
    payType: {
      type: 'number',
      minimum: 1,
      maximum: 2,
    },
  },
};

/**
 * 校验账单数据格式
 * @param {Object} data 账单数据
 */
function billValidate(data = {}) {
  return validate(SCHEMA, data);
}

module.exports = billValidate;
