import { lazy } from 'react'
const MoneyExchange = lazy(() => import('./MoneyExchangeScreen'))

const MoneyExchangeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/money-exchange',
      element: <MoneyExchange />,
    },
  ],
}

export default MoneyExchangeConfig
