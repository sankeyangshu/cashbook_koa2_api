/*
 * @Description: 账单-路由 bill-api
 * @Author: 王振
 * @Date: 2021-08-17 13:35:31
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-17 14:16:51
 */

// 引入koa路由  该写法等同于 const Router = require('koa-router'); const router = new Router()
const router = require('koa-router')();
const { addBill, getBill, destoryBill } = require('../../controller/bill');
const { genValidator } = require('../../middlewares/validator');
const billValidate = require('../../validator/bill');

// 路由前缀
router.prefix('/api/bill');

// 用户新增账单
router.post('/addBill', genValidator(billValidate), async (ctx, next) => {
  const { payType, amount, date, typeId, typeName, remark } = ctx.request.body;
  ctx.body = await addBill(ctx, { payType, amount, date, typeId, typeName, remark });
});

// 用户获取订单
router.get('/getBillInfo', async (ctx, next) => {
  let { pageIndex, pageSize, typeId } = ctx.request.query;
  pageIndex = parseInt(pageIndex);
  pageSize = parseInt(pageSize);
  ctx.body = await getBill(ctx, { pageIndex, pageSize, typeId });
});

// 用户删除订单
router.delete('/deleteBill', async (ctx, next) => {
  const { id } = ctx.request.query;
  ctx.body = await destoryBill(ctx, id);
});

// 导出路由
module.exports = router;
