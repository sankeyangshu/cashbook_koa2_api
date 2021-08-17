/*
 * @Description: 账单-控制层 bill-controller
 * @Author: 王振
 * @Date: 2021-08-17 13:58:57
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-17 14:10:31
 */

const { createBill, getBillInfo, deleteBill } = require('../services/bill');
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const { SECRET } = require('../conf/constant');
const doCrypto = require('../utils/cryp');
const jwt = require('jsonwebtoken');
const util = require('util');
const verify = util.promisify(jwt.verify);

/**
 * @description: 新增账单
 * @param {*} ctx 上下文
 * @param {number} payType 账单类型（ 1 为支出，2 为收入）
 * @param {number} amount 账单价格
 * @param {string} date 账单日期
 * @param {number} typeId 账单标签 id
 * @param {string} typeName 账单标签名称
 * @param {string} remark 账单备注
 */
async function addBill(ctx, { payType, amount, date, typeId, typeName, remark }) {
  // 解析token，获取用户信息
  const token = ctx.header.authorization;
  const payload = await verify(token.split(' ')[1], SECRET);
  const { id } = payload;
  try {
    // 添加账单
    await createBill({ payType, amount, date, typeId, typeName, remark, userId: id });
    return new SuccessModel();
  } catch (ex) {
    // 添加失败
    console.error(ex.message, ex.stack);
    return new ErrorModel({
      code: 10010,
      message: '添加账单失败',
    });
  }
}

/**
 * @description: 获取账单列表数据
 * @param {*} ctx 上下文
 * @param {number} pageIndex 页数
 * @param {number} pageSize 每页多少条
 * @param {number} typeId 账单标签id
 */
async function getBill(ctx, { pageIndex = 0, pageSize = 10, typeId }) {
  // 解析token，获取用户信息
  const token = ctx.header.authorization;
  const payload = await verify(token.split(' ')[1], SECRET);
  const userId = payload.id;

  // 获取用户收货地址
  const result = await getBillInfo({ userId, typeId, pageIndex, pageSize });
  const billList = result.billList;
  // 拼接返回数据
  return new SuccessModel({
    isEmpty: billList.length === 0,
    billList,
    pageSize,
    pageIndex,
    count: result.count,
  });
}

/**
 * @description: 删除账单数据
 * @param {*} ctx 上下文
 * @param {*} id 账单id
 */
async function destoryBill(ctx, id) {
  // 解析token，获取用户信息
  const token = ctx.header.authorization;
  const payload = await verify(token.split(' ')[1], SECRET);
  const userId = payload.id;

  const result = await deleteBill({ userId, id });
  if (result) {
    // 删除成功
    return new SuccessModel();
  }
  return new ErrorModel({
    code: 10011,
    message: '删除账单失败',
  });
}

module.exports = {
  addBill,
  getBill,
  destoryBill,
};
