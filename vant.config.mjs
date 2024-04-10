export default {
  name: 'my-vant',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/my-vant/',
    },
  },
  site: {
    // 组件库名称
    title: 'my-vant',
    // 组件库 logo
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    // 组件库描述
    description: '基于 vue3 版本的组件库模板',
    // 在`<head>`标签中插入一段自定义的 HTML 内容。可用于修改文档站点样式
    headHtml: `<style type="text/css">
      .hash-demo-title {
        padding: 24px;
        font-size: 20px;
        text-align: center;
      }
      </style>`,
    // 暗黑模式全局 class 类名
    darkModeClass: 'van-theme-dark',
    // 普通模式全局 class 类名
    lightModeClass: 'van-theme-light',
    // 站点右上角跳转链接
    links: [
      {
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        url: 'https://github.com/bingmada/my-vant.git',
      },
    ],
    // 站点左侧菜单导航
    nav: [
      {
        title: '开发指南',
        items: [
          { path: 'home', title: '介绍' },
          { path: 'quickstart', title: '快速上手' },
          { path: 'changelog', title: '更新日志' },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
