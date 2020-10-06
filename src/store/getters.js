const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  isAdd: state => state.curd.isAdd,
  isEdit: state => state.curd.isEdit,
  isView: state => state.curd.isView,
  selectItems: state => state.curd.selectItems,
  roles: state => state.permission.roles
};
export default getters;
