/*
 * @Description: 失败信息集合，包括code和message
 * @Author: 王振
 * @Date: 2021-07-09 10:39:38
 * @LastEditors: 王振
 * @LastEditTime: 2021-07-09 10:40:06
 */

module.exports = {
  // 用户名已存在
  registerUserNameExistInfo: {
    code: 10001,
    message: '用户名已存在',
  },
  // 注册失败
  registerFailInfo: {
    code: 10002,
    message: '注册失败，请重试',
  },
  // 用户名不存在
  registerUserNameNotExistInfo: {
    code: 10003,
    message: '用户名未存在',
  },
  // 登录失败
  loginFailInfo: {
    code: 10004,
    message: '登录失败，用户名或密码错误',
  },
  // 未登录
  loginCheckFailInfo: {
    code: 10005,
    message: '您尚未登录',
  },
  // 修改密码失败
  changePasswordFailInfo: {
    code: 10006,
    message: '修改密码失败，请重试',
  },
  // 上传文件过大
  uploadFileSizeFailInfo: {
    code: 10007,
    message: '上传文件尺寸过大',
  },
  // 修改基本信息失败
  changeInfoFailInfo: {
    code: 10008,
    message: '修改基本信息失败',
  },
  // json schema 校验失败
  jsonSchemaFileInfo: {
    code: 10009,
    message: '数据格式校验错误',
  },
};
