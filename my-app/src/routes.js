import Home from './components/Home'
import AllStocks from './components/Stocks/AllStocks'
import Portfolio from './components/Portfolio/PortfolioGrid'
import NotFound from './components/404'

export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/stocks', component: AllStocks, name: 'stocks' },
  { path: '/portfolio', component: Portfolio, name: 'portfolio' },
  { path: '*', component: NotFound }
]
