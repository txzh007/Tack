/**
 * 可结合Element的table组件分析该对象结构
 *title :列标题 （此处填写数据库对应的名称，显示的时候会调用国际化处理(i18n文件中定义key=title的国际化)显示为对应语言
 *key: 列显示字段prop
 *flag: 是否显示到表单中
 *type: 表单类型 1:input 2:select 3:checkbox 4:radio 5:datePicker 6:TimePicker
 *width: 列宽
 *isSearch: 搜索表单否显示该字段
 *isAdd: 是否在新增表单添加该字段
 *isEdit: 详情表单/编辑表单是否显示该字段
 *url : select查询的接口,一般为一个表名,在selectview模块中拼接url
 *最后一列自定义渲染,render里定义渲染的view
 */
// 供应商列表字段
const mdVendor = [
  {
    type: "radio",
    width: 50,
    key: "id"
  },
  {
    title: "vendorname",
    key: "vendorname",
    flag: 1,
    type: 1,
    width: 200,
    isSearch: 1,
    isAdd: 1,
    isEdit: 1,
    sortable: true
  },
  {
    title: "vendorcode",
    key: "vendorcode",
    flag: 1,
    type: 1,
    width: 200,
    isAdd: 0,
    sortable: true
  },
  {
    title: "unicreditcode",
    key: "unicreditcode",
    flag: 1,
    type: 1,
    width: 200,
    isAdd: 1,
    isEdit: 1,
    sortable: true
  },
  {
    title: "vendorcontact",
    key: "vendorcontact",
    flag: 1,
    type: 1,
    width: 200,
    isAdd: 1,
    isEdit: 1
  },
  {
    title: "vendortel",
    key: "vendortel",
    flag: 1,
    type: 1,
    width: 200,
    isSearch: 0,
    isEdit: 1,
    isAdd: 1
  },
  {
    title: "vendoraddress",
    key: "vendoraddress",
    flag: 1,
    type: 1,
    width: 200,
    isAdd: 1,
    isEdit: 1
  },
  {
    title: "fax",
    key: "fax",
    flag: 1,
    type: 1,
    width: 200,
    isAdd: 1,
    isEdit: 1
  },
  {
    title: "email",
    key: "email",
    flag: 1,
    type: 1,
    width: 200,
    isAdd: 1,
    isEdit: 1
  },

  {
    title: "vendortype",
    key: "typeid",
    flag: 1,
    type: 2,
    width: 200,
    isMultiple: true,
    isAdd: 1,
    isEdit: 1,
    isSearch: 1,
    url: "dictDetail/view?id=16"
  },

  {
    title: "countrytypename",
    key: "countrytype",
    flag: 1,
    type: 2,
    width: 200,
    isAdd: 1,
    isEdit: 1,
    url: "sysDictD/view?typeid=30"
  },

  {
    title: "currencyname",
    key: "currency",
    type: 2,
    width: 200,
    isAdd: 1,
    isEdit: 1,
    url: "mdCurrency/view"
  },
  {
    title: "taxrate",
    key: "taxrate",
    flag: 1,
    type: 1,
    width: 200,
    isAdd: 1,
    isEdit: 1
  },
  {
    title: "paytermname",
    key: "paytermid",
    flag: 0,
    type: 2,
    isAdd: 1,
    isEdit: 1,
    width: 200,
    url: "mdPaymentTerm/view"
  },
  {
    title: "bankaccount",
    key: "bankaccount",
    flag: 0,
    type: 2,
    width: 200,
    isAdd: 0,
    isEdit: 1,
    url: "mdVendorAccount/view"
  },
  {
    title: "bankname",
    key: "bankname",
    flag: 0,
    type: 1,
    width: 200,
    isAdd: 0,
    isEdit: 1
  },
  {
    title: "invoicetitle",
    key: "invoicetitle",
    flag: 0,
    type: 1,
    width: 200,
    isAdd: 0,
    isEdit: 1
  },

  {
    title: "taxno",
    key: "taxno",
    flag: 0,
    type: 1,
    width: 200,
    isAdd: 0,
    isEdit: 1
  },
  {
    title: "contact",
    key: "contact",
    flag: 0,
    type: 1,
    width: 200,
    isAdd: 0,
    isEdit: 1
  },
  {
    title: "tel",
    key: "tel",
    flag: 0,
    type: 1,
    width: 200,
    isAdd: 0,
    isEdit: 1
  },
  {
    title: "address",
    key: "address",
    flag: 0,
    type: 1,
    width: 200,
    isAdd: 0,
    isEdit: 1
  },

  { title: "memo", key: "memo", flag: 1, type: 1, width: 200, isAdd: 1 },
  {
    title: "operation",
    key: "operation",
    flag: 1,
    type: 1,
    width: 200,
    render: [
      { label: "edit", type: 1 },
      { label: "view", type: 2 },
      { label: "delete", type: 3 }
    ]
  }
];
module.exports = {
  mdVendor
};
