import Home from './components/Home'
import User from './components/user/User'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import UserStart from './components/user/UserStart'

export const routes = [
  { path: '', component: Home, name: 'home' },
  { path: '/user',
    component: User,
    children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail, name: 'userDetail' },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] }
]
