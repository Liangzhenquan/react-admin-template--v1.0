const menu = [
  {
    key: '/index',
    title: '首页',
    icon: 'home',
    auth: [1,],
  },
  {
    key: '/setting',
    title: '设置',
    icon: 'setting',
    subs: [
      {
        key: '/setting/minesetting',
        title: '我的设置',
        auth: [2,],
      },
    ],
  },
];

export default menu;