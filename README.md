# Tack

## 这是一个基于[vue-element-admin-i18n](https://github.com/PanJiaChen/vue-element-admin/tree/i18n)的修改版

此项目 基于 vue-cli 进行构建，若发现问题，欢迎提 issue。

- 保留语言切换、各种模版
- 纯将静态路由改为 静态基础路由+动态路由
- 删除 tags、前端鉴权(不建议内部 tags，已配动态路由 鉴权删除)
- 删除移动端适配 (移动端建议重做页面)

### 目前计划：

1. 通用可配增删改差页面 (ing)
2. 账户增删改差基本模块
3. 角色增删改差基本模块
4. 菜单增删改差基本模块

## Getting started

```bash
# clone the project
git clone https://github.com/PanJiaChen/vue-element-admin.git

# enter the project directory
cd vue-element-admin

# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:9527

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```
