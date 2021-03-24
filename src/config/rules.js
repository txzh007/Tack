// 验证配置文件
/**
 * 基本验证规则
 * 具体配置请参考async-validator
 */
const rules = {
  required: { required: true, message: '不能为空' }, // 必需字段
  number: { pattern: /^\d+(\.\d+)?$/, message: '数字' }, // 数字（可带小数点）
  url: { type: 'url', message: '' },
  tel: {
    pattern: /^1[3456789]\d{9}$/,
    message: '请填写正确的联系方式',
  },
  email: { type: 'email', message: 'email地址不合法' },
  length_18: { max: 18, message: '长度不超过18个字符' },
  length_32: { max: 32, message: '长度不超过32个字符' },
  length_64: { max: 64, message: '长度不超过64个字符' },
  overseasTel: {
    pattern: /(?:\(?[0\+]\d{2,3}\)?)[\s-]?(?:(?:\(0{1,3}\))?[0\d]{1,4})[\s-](?:[\d]{7,8}|[\d]{3,4}[\s-][\d]{3,4})|(?:\(?[0\+]?\d{1,3}\)?)[\s-]?(?:0|\d{1,4})[\s-]?(?:(?:13\d{9})|(?:\d{7,8}))/,
    message: '号码有误',
  },
}

// 供应商列表字段
const mdVendor = {
  vendorname: [rules.required, rules.length_64],
  unicreditcode: [rules.length_64],
  vendorcode: [rules.required],
  vendoraddress: [],
  leadday: [rules.required, rules.number],
  typeid: [rules.required],
  vendorcontact: [rules.length_64],
  vendortel: [rules.overseasTel],
  email: [rules.email],
  website: [rules.url],
  currency: [rules.required],
  accountholder: [],
  taxrate: [rules.number],
  bankname: [],
  bankaddr: [],
  bankaccount: [],
  taxno: [],
  invoicetitle: [],
  paytemid: [],
  memo: [],
  countrytype: [rules.required],
}

module.exports = {
  mdVendor,
}
