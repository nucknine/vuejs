import Home from './components/Home'
import AllStocks from './components/Stocks/AllStocks'
import Portfolio from './components/Portfolio/PortfolioGrid'
import NotFound from './components/404'
import signin from './components/auth/signin'
import signup from './components/auth/signup'

export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/signin', component: signin, name: 'signin' },
  { path: '/signup', component: signup, name: 'signup' },
  { path: '/stocks', component: AllStocks, name: 'stocks' },
  { path: '/portfolio', component: Portfolio, name: 'portfolio' },
  { path: '*', component: NotFound }
]
