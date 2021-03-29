const asyncRoutes = [
  {
    path: "/icon",
    component: "layout",
    type: 0,
    id: 1,
    pid: 0,
    children: [
      {
        path: "index",
        component: "icons/index",
        id: 2,
        pid: 1,
        type: 1,
        name: "Icons",
        title: "icons",
        icon: "icon"
      }
    ]
  },

  {
    path: "/components",
    component: "layout",
    type: 0,
    pid: 0,
    id: 3,
    redirect: "noRedirect",
    name: "ComponentDemo",
    title: "components",
    icon: "component",
    children: [
      {
        path: "tinymce",
        component: "components-demo/tinymce",
        type: 1,
        pid: 3,
        id: 4,
        name: "TinymceDemo",
        title: "tinymce"
      },
      {
        path: "markdown",
        component: "components-demo/markdown",
        type: 1,
        pid: 3,
        id: 5,
        name: "MarkdownDemo",
        title: "markdown"
      },

      {
        path: "sticky",
        component: "components-demo/sticky",
        type: 1,
        pid: 3,
        id: 10,
        name: "StickyDemo",
        title: "sticky"
      },

      {
        path: "mixin",
        component: "components-demo/mixin",
        type: 1,
        pid: 3,
        id: 12,
        name: "ComponentMixinDemo",
        title: "componentMixin"
      },
      {
        path: "back-to-top",
        component: "components-demo/back-to-top",
        type: 1,
        pid: 3,
        id: 13,
        name: "BackToTopDemo",
        title: "backToTop"
      },
      {
        path: "drag-dialog",
        component: "components-demo/drag-dialog",
        type: 1,
        pid: 3,
        id: 14,
        name: "DragDialogDemo",
        title: "dragDialog"
      },
      {
        path: "drag-select",
        component: "components-demo/drag-select",
        type: 1,
        pid: 3,
        id: 15,
        name: "DragSelectDemo",
        title: "dragSelect"
      },
      {
        path: "dnd-list",
        component: "components-demo/dnd-list",
        type: 1,
        pid: 3,
        id: 16,
        name: "DndListDemo",
        title: "dndList"
      },
      {
        path: "drag-kanban",
        component: "components-demo/drag-kanban",
        type: 1,
        pid: 3,
        id: 17,
        name: "DragKanbanDemo",
        title: "dragKanban"
      }
    ]
  },
  {
    path: "/charts",
    component: "layout",
    type: 0,
    pid: 0,
    id: 18,
    redirect: "noRedirect",
    name: "Charts",
    title: "charts",
    icon: "chart",
    children: [
      {
        path: "keyboard",
        component: "charts/keyboard",
        type: 1,
        pid: 18,
        id: 19,
        name: "KeyboardChart",
        title: "keyboardChart"
      },
      {
        path: "line",
        component: "charts/line",
        name: "LineChart",
        type: 1,
        pid: 18,
        id: 20,
        title: "lineChart"
      },
      {
        path: "mixchart",
        component: "charts/mixChart",
        type: 1,
        pid: 18,
        id: 21,
        name: "MixChart",
        title: "mixChart"
      }
    ]
  },
  {
    path: "/temp",
    component: "layout",
    type: 0,
    pid: 0,
    id: 22,
    redirect: "noRedirect",
    name: "temp",
    title: "temp",
    alwaysShow: true,
    icon: "chart",
    children: [
      {
        path: "mdVendor",
        component: "temp/mdVendor",
        pid: 22,
        id: 23,
        type: 1,
        name: "mdVendor",
        title: "mdVendor"
      }
    ]
  },
  {
    path: "/nested",
    component: "layout",
    type: 0,
    pid: 0,
    redirect: "/nested/menu1/menu1-1",
    name: "Nested",
    id: 24,
    title: "nested",
    icon: "nested",

    children: [
      {
        path: "menu1",
        component: "nested/menu1/index",
        name: "Menu1",
        type: 0,
        pid: 24,
        id: 25,
        title: "menu1",
        redirect: "/nested/menu1/menu1-1",
        children: [
          {
            path: "menu1-1",
            component: "nested/menu1/menu1-1",
            type: 1,
            pid: 25,
            id: 26,
            name: "Menu1-1",
            title: "menu1-1"
          },
          {
            path: "menu1-2",
            component: "nested/menu1/menu1-2",
            name: "Menu1-2",
            type: 0,
            id: 27,
            pid: 25,
            redirect: "/nested/menu1/menu1-2/menu1-2-1",
            title: "menu1-2",
            children: [
              {
                path: "menu1-2-1",
                component: "nested/menu1/menu1-2/menu1-2-1",
                name: "Menu1-2-1",
                id: 28,
                pid: 27,
                type: 1,
                title: "menu1-2-1"
              },
              {
                path: "menu1-2-2",
                component: "nested/menu1/menu1-2/menu1-2-2",
                name: "Menu1-2-2",
                pid: 27,
                id: 29,
                type: 1,
                title: "menu1-2-2"
              }
            ]
          },
          {
            path: "menu1-3",
            component: "nested/menu1/menu1-3",
            type: 1,
            id: 30,
            pid: 25,
            name: "Menu1-3",
            title: "menu1-3"
          }
        ]
      },
      {
        path: "menu2",
        name: "Menu2",
        id: 31,
        pid: 24,
        component: "nested/menu2/index",
        type: 1,
        title: "menu2"
      }
    ]
  },

  {
    path: "/example",
    component: "layout",
    type: 0,
    pid: 0,
    id: 32,
    redirect: "/example/list",
    name: "Example",

    title: "example",
    icon: "example",
    children: [
      {
        path: "create",
        component: "example/create",
        name: "CreateArticle",
        pid: 32,
        id: 33,
        type: 1,
        title: "createArticle",
        icon: "edit"
      },
      {
        path: "edit/:id(\\d+)",
        component: "example/edit",
        type: 1,
        pid: 32,
        id: 34,
        name: "EditArticle",
        title: "editArticle",
        hidden: true
      },
      {
        path: "list",
        component: "example/list",
        type: 1,
        pid: 32,
        id: 35,
        name: "ArticleList",
        title: "articleList",
        icon: "list"
      }
    ]
  },
  {
    path: "/table",
    component: "layout",
    type: 0,
    pid: 0,
    id: 36,
    redirect: "/table/complex-table",
    name: "Table",
    title: "Table",
    icon: "table",
    children: [
      {
        path: "dynamic-table",
        component: "table/dynamic-table/index",
        type: 1,
        pid: 36,
        id: 37,
        name: "DynamicTable",
        title: "dynamicTable"
      },
      {
        path: "drag-table",
        component: "table/drag-table",
        type: 1,
        pid: 36,
        id: 38,
        name: "DragTable",
        title: "dragTable"
      },
      {
        path: "inline-edit-table",
        component: "table/inline-edit-table",
        type: 1,
        pid: 36,
        id: 39,
        name: "InlineEditTable",
        title: "inlineEditTable"
      },
      {
        path: "complex-table",
        component: "table/complex-table",
        type: 1,
        pid: 36,
        id: 40,
        name: "ComplexTable",
        title: "complexTable"
      }
    ]
  },
  {
    path: "/tab",
    component: "layout",
    type: 0,
    pid: 0,
    id: 51,
    children: [
      {
        path: "index",
        component: "tab/index",
        name: "Tab",
        type: 1,
        pid: 51,
        id: 52,
        title: "tab",
        icon: "tab"
      }
    ]
  },

  {
    path: "/error",
    component: "layout",
    type: 0,
    pid: 0,
    id: 53,
    redirect: "noRedirect",
    name: "ErrorPages",

    title: "errorPages",
    icon: "404",
    children: [
      {
        path: "401",
        component: "error-page/401",
        type: 1,
        pid: 53,
        id: 54,
        name: "Page401",
        title: "page401"
      },
      {
        path: "404",
        component: "error-page/404",
        type: 1,
        pid: 53,
        id: 55,
        name: "Page404",
        title: "page404"
      }
    ]
  },

  {
    path: "/error-log",
    component: "layout",
    type: 0,
    pid: 0,
    id: 56,
    redirect: "noRedirect",
    children: [
      {
        path: "log",
        component: "error-log/index",
        name: "ErrorLog",
        type: 1,
        pid: 56,
        id: 57,
        title: "errorLog",
        icon: "bug"
      }
    ]
  },

  {
    path: "/excel",
    component: "layout",
    type: 0,
    id: 58,
    pid: 0,
    redirect: "/excel/export-excel",
    name: "Excel",

    title: "excel",
    icon: "excel",
    children: [
      {
        path: "export-excel",
        component: "excel/export-excel",
        name: "ExportExcel",
        pid: 58,
        id: 59,
        type: 1,
        title: "exportExcel"
      },
      {
        path: "export-selected-excel",
        component: "excel/select-excel",
        name: "SelectExcel",
        pid: 58,
        id: 60,
        type: 1,
        title: "selectExcel"
      },
      {
        path: "export-merge-header",
        component: "excel/merge-header",
        name: "MergeHeader",
        type: 1,
        pid: 58,
        id: 61,
        title: "mergeHeader"
      },
      {
        path: "upload-excel",
        component: "excel/upload-excel",
        name: "UploadExcel",
        type: 1,
        pid: 58,
        id: 62,
        title: "uploadExcel"
      }
    ]
  },

  {
    path: "/zip",
    component: "layout",
    type: 0,
    pid: 0,
    id: 63,
    redirect: "/zip/download",
    alwaysShow: true,
    title: "zip",
    icon: "zip",
    children: [
      {
        path: "download",
        component: "zip/index",
        type: 1,
        pid: 63,
        id: 64,
        name: "ExportZip",
        title: "exportZip"
      }
    ]
  },

  {
    path: "/pdf",
    component: "layout",
    type: 0,
    pid: 0,
    id: 65,
    redirect: "/pdf/index",
    children: [
      {
        path: "index",
        component: "pdf/index",
        name: "PDF",
        type: 1,
        pid: 65,
        id: 66,
        title: "pdf",
        icon: "pdf"
      }
    ]
  },
  {
    path: "/pdf/download",
    pid: 0,
    id: 67,
    component: "pdf/download",
    hidden: true
  },

  {
    path: "/theme",
    component: "layout",
    type: 0,
    pid: 0,
    id: 68,
    redirect: "noRedirect",
    children: [
      {
        path: "index",
        component: "theme/index",
        name: "Theme",
        pid: 68,
        id: 69,
        type: 1,
        title: "theme",
        icon: "theme"
      }
    ]
  },

  {
    path: "/clipboard",
    component: "layout",
    type: 0,
    pid: 0,
    id: 70,
    redirect: "noRedirect",
    children: [
      {
        path: "index",
        component: "clipboard/index",
        type: 1,
        pid: 70,
        id: 71,
        name: "ClipboardDemo",
        title: "clipboardDemo",
        icon: "clipboard"
      }
    ]
  },

  {
    path: "/i18n",
    component: "layout",
    type: 0,
    pid: 0,
    id: 72,
    children: [
      {
        path: "index",
        component: "i18n-demo/index",
        name: "I18n",
        type: 1,
        id: 73,
        pid: 72,
        title: "i18n",
        icon: "international"
      }
    ]
  },

  {
    path: "external-link",
    component: "layout",
    type: 0,
    id: 74,
    pid: 0,
    children: [
      {
        path: "https://github.com/txzh007/tack",
        title: "externalLink",
        type: 1,
        pid: 74,
        id: 75,
        icon: "link"
      }
    ]
  },

  { path: "*", redirect: "/404", pid: 0, id: 76, hidden: true }
];

const innerArr = [];
function flatObj(arr, obj = {}) {
  arr.forEach(item => {
    if (Object.prototype.toString.call(item) === "[object Object]") {
      let flag = true;
      for (const prop in item) {
        if (Array.isArray(item[prop])) {
          flag = false;
          flatObj(item[prop], obj);
        } else {
          obj[prop] = item[prop];
        }
      }
      flag && innerArr.push(JSON.parse(JSON.stringify(obj)));
    } else if (Object.prototype.toString.call(item) === "[object Array]") {
      flatObj(item, obj);
    }
  });
}
console.log("vv:", flatObj(asyncRoutes));
