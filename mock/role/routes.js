// Just a mock data

const asyncRoutes = [
  {
    path: "/icon",
    component: "layout",
    children: [
      {
        path: "index",
        component: "icons/index",
        name: "Icons",
        title: "icons",
        icon: "icon"
      }
    ]
  },

  {
    path: "/components",
    component: "layout",
    redirect: "noRedirect",
    name: "ComponentDemo",
    title: "components",
    icon: "component",
    children: [
      {
        path: "tinymce",
        component: "components-demo/tinymce",
        name: "TinymceDemo",
        title: "tinymce"
      },
      {
        path: "markdown",
        component: "components-demo/markdown",
        name: "MarkdownDemo",
        title: "markdown"
      },
      {
        path: "json-editor",
        component: "components-demo/json-editor",
        name: "JsonEditorDemo",
        title: "jsonEditor"
      },
      {
        path: "split-pane",
        component: "components-demo/split-pane",
        name: "SplitpaneDemo",
        title: "splitPane"
      },
      {
        path: "avatar-upload",
        component: "components-demo/avatar-upload",
        name: "AvatarUploadDemo",
        title: "avatarUpload"
      },
      {
        path: "dropzone",
        component: "components-demo/dropzone",
        name: "DropzoneDemo",
        title: "dropzone"
      },
      {
        path: "sticky",
        component: "components-demo/sticky",
        name: "StickyDemo",
        title: "sticky"
      },
      {
        path: "count-to",
        component: "components-demo/count-to",
        name: "CountToDemo",
        title: "countTo"
      },
      {
        path: "mixin",
        component: "components-demo/mixin",
        name: "ComponentMixinDemo",
        title: "componentMixin"
      },
      {
        path: "back-to-top",
        component: "components-demo/back-to-top",
        name: "BackToTopDemo",
        title: "backToTop"
      },
      {
        path: "drag-dialog",
        component: "components-demo/drag-dialog",
        name: "DragDialogDemo",
        title: "dragDialog"
      },
      {
        path: "drag-select",
        component: "components-demo/drag-select",
        name: "DragSelectDemo",
        title: "dragSelect"
      },
      {
        path: "dnd-list",
        component: "components-demo/dnd-list",
        name: "DndListDemo",
        title: "dndList"
      },
      {
        path: "drag-kanban",
        component: "components-demo/drag-kanban",
        name: "DragKanbanDemo",
        title: "dragKanban"
      }
    ]
  },
  {
    path: "/charts",
    component: "layout",
    redirect: "noRedirect",
    name: "Charts",

    title: "charts",
    icon: "chart",

    children: [
      {
        path: "keyboard",
        component: "charts/keyboard",
        name: "KeyboardChart",
        title: "keyboardChart"
      },
      {
        path: "line",
        component: "charts/line",
        name: "LineChart",
        title: "lineChart"
      },
      {
        path: "mixchart",
        component: "charts/mixChart",
        name: "MixChart",
        title: "mixChart"
      }
    ]
  },
  {
    path: "/nested",
    component: "layout",
    redirect: "/nested/menu1/menu1-1",
    name: "Nested",

    title: "nested",
    icon: "nested",

    children: [
      {
        path: "menu1",
        component: "nested/menu1/index",
        name: "Menu1",
        title: "menu1",
        redirect: "/nested/menu1/menu1-1",
        children: [
          {
            path: "menu1-1",
            component: "nested/menu1/menu1-1",
            name: "Menu1-1",
            title: "menu1-1"
          },
          {
            path: "menu1-2",
            component: "nested/menu1/menu1-2",
            name: "Menu1-2",
            redirect: "/nested/menu1/menu1-2/menu1-2-1",
            title: "menu1-2",
            children: [
              {
                path: "menu1-2-1",
                component: "nested/menu1/menu1-2/menu1-2-1",
                name: "Menu1-2-1",
                title: "menu1-2-1"
              },
              {
                path: "menu1-2-2",
                component: "nested/menu1/menu1-2/menu1-2-2",
                name: "Menu1-2-2",
                title: "menu1-2-2"
              }
            ]
          },
          {
            path: "menu1-3",
            component: "nested/menu1/menu1-3",
            name: "Menu1-3",
            title: "menu1-3"
          }
        ]
      },
      {
        path: "menu2",
        name: "Menu2",
        component: "nested/menu2/index",
        title: "menu2"
      }
    ]
  },

  {
    path: "/example",
    component: "layout",
    redirect: "/example/list",
    name: "Example",

    title: "example",
    icon: "example",
    children: [
      {
        path: "create",
        component: "example/create",
        name: "CreateArticle",
        title: "createArticle",
        icon: "edit"
      },
      {
        path: "edit/:id(\\d+)",
        component: "example/edit",
        name: "EditArticle",
        title: "editArticle",
        hidden: true
      },
      {
        path: "list",
        component: "example/list",
        name: "ArticleList",
        title: "articleList",
        icon: "list"
      }
    ]
  },

  {
    path: "/tab",
    component: "layout",
    children: [
      {
        path: "index",
        component: "tab/index",
        name: "Tab",
        title: "tab",
        icon: "tab"
      }
    ]
  },

  {
    path: "/error",
    component: "layout",
    redirect: "noRedirect",
    name: "ErrorPages",

    title: "errorPages",
    icon: "404",
    children: [
      {
        path: "401",
        component: "error-page/401",
        name: "Page401",
        title: "page401"
      },
      {
        path: "404",
        component: "error-page/404",
        name: "Page404",
        title: "page404"
      }
    ]
  },

  {
    path: "/error-log",
    component: "layout",
    redirect: "noRedirect",
    children: [
      {
        path: "log",
        component: "error-log/index",
        name: "ErrorLog",
        title: "errorLog",
        icon: "bug"
      }
    ]
  },

  {
    path: "/excel",
    component: "layout",
    redirect: "/excel/export-excel",
    name: "Excel",

    title: "excel",
    icon: "excel",
    children: [
      {
        path: "export-excel",
        component: "excel/export-excel",
        name: "ExportExcel",
        title: "exportExcel"
      },
      {
        path: "export-selected-excel",
        component: "excel/select-excel",
        name: "SelectExcel",
        title: "selectExcel"
      },
      {
        path: "export-merge-header",
        component: "excel/merge-header",
        name: "MergeHeader",
        title: "mergeHeader"
      },
      {
        path: "upload-excel",
        component: "excel/upload-excel",
        name: "UploadExcel",
        title: "uploadExcel"
      }
    ]
  },

  {
    path: "/zip",
    component: "layout",
    redirect: "/zip/download",
    alwaysShow: true,
    title: "zip",
    icon: "zip",
    children: [
      {
        path: "download",
        component: "zip/index",
        name: "ExportZip",
        title: "exportZip"
      }
    ]
  },

  {
    path: "/pdf",
    component: "layout",
    redirect: "/pdf/index",
    children: [
      {
        path: "index",
        component: "pdf/index",
        name: "PDF",
        title: "pdf",
        icon: "pdf"
      }
    ]
  },
  {
    path: "/pdf/download",
    component: "pdf/download",
    hidden: true
  },

  {
    path: "/theme",
    component: "layout",
    redirect: "noRedirect",
    children: [
      {
        path: "index",
        component: "theme/index",
        name: "Theme",
        title: "theme",
        icon: "theme"
      }
    ]
  },

  {
    path: "/clipboard",
    component: "layout",
    redirect: "noRedirect",
    children: [
      {
        path: "index",
        component: "clipboard/index",
        name: "ClipboardDemo",
        title: "clipboardDemo",
        icon: "clipboard"
      }
    ]
  },

  {
    path: "/i18n",
    component: "layout",
    children: [
      {
        path: "index",
        component: "i18n-demo/index",
        name: "I18n",
        title: "i18n",
        icon: "international"
      }
    ]
  },

  {
    path: "external-link",
    component: "layout",
    children: [
      {
        path: "https://github.com/txzh007/tack",
        title: "externalLink",
        icon: "link"
      }
    ]
  },

  { path: "*", redirect: "/404", hidden: true }
];

module.exports = {
  asyncRoutes
};
