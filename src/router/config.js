import loadable from '@/utils/loadable';

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/index'));

// 设置
const MineSetting = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/setting/MineSetting'));

const routes = [
  { path: '/index', exact: true, name: '首页', Component: Index, auth: [1,], },
  { path: '/setting/minesetting', exact: true, name: '我的设置', Component: MineSetting, auth: [2,], },
];

export default routes;