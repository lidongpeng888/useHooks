import { menus } from './hooks';
import { uimenus } from './ui';
const packages = require('../packages/hooks/package.json');

export default {
  exportStatic: {},
  publicPath: './',
  // publicPath: '/',
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: '组件库',
  // favicon: '/avatar.png',
  // logo: '/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    encodeHooks: process.cwd() + '/packages/hooks/src/index.ts',
    'encode-hooks': process.cwd() + '/packages/hooks/src/index.ts',
    uiComponents: process.cwd() + '/packages/uiComponents/src/index.ts',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src', 'packages/uiComponents/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    // { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: '组件', path: '/ui' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    // '/guide': [
    //   {
    //     title: '介绍',
    //     path: '/guide',
    //   },
    // ],
    '/hooks': menus,
    '/ui': uimenus,
  },
};
