export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user', routes: [
          { name: 'Login Page', path: '/user/login', component: './user/Login' },
          { name: 'Register Page', path: '/user/register', component: './user/Register' }
        ]
      },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: 'Welcome Page', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: 'Admin Pages',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/user-manage', name: 'User Management Page', icon: 'smile', component: './Admin/UserManage' },
      { component: './404' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];