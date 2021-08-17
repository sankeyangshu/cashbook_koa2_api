/*
 * @Description: 账单 bill services层
 * @Author: 王振
 * @Date: 2021-08-17 13:44:52
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-17 13:58:35
 */

const { Bill } = require('../db/model/index');

/**
 * @description: 创造账单
 * @param {number} payType 账单类型（ 1 为支出，2 为收入）
 * @param {number} amount 账单价格
 * @param {string} date 账单日期
 * @param {number} typeId 账单标签 id
 * @param {string} typeName 账单标签名称
 * @param {string} remark 账单备注
 * @param {number} userId 用户id
 */
async function createBill({ payType, amount, date, typeId, typeName, remark, userId }) {
  // 插入数据
  const result = await Bill.create({ payType, amount, date, typeId, typeName, remark, userId });
  return result.dataValues;
}

/**
 * @description: 获取账单列表数据
 * @param {number} userId 用户id
 * @param {number} typeId 账单标签 id
 * @param {number} pageIndex 页数
 * @param {number} pageSize 每页多少条
 */
async function getBillInfo({ userId, typeId, pageIndex = 0, pageSize = 10 }) {
  // 拼接查询条件
  const WhereOpts = {};
  if (userId) {
    WhereOpts.userId = userId;
  }
  //判断是否存在精确查询
  if (typeId) {
    WhereOpts.typeId = typeId;
  }

  // 执行查询
  const result = await Bill.findAndCountAll({
    limit: pageSize, // 每页多少条
    offset: pageSize * pageIndex, // 跳过多少条
    order: [['id', 'asc']],
    where: WhereOpts,
  });
  // result.count 总数，跟分页无关
  // result.rows 查询结果，数组

  // 获取 dataValues
  const billList = result.rows.map((row) => row.dataValues);

  return {
    count: result.count,
    billList,
  };
}

/**
 * @description: 删除账单
 * @param {number} userId 用户id
 * @param {number} id 账单id
 */
async function deleteBill({ userId, id }) {
  const result = await Bill.destroy({
    where: {
      userId,
      id,
    },
  });
  // result 删除的行数
  return result > 0;
}

module.exports = {
  createBill,
  getBillInfo,
  deleteBill,
};
