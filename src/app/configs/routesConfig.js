import FuseUtils from '@fuse/utils'
import FuseLoading from '@fuse/core/FuseLoading'

import { Navigate } from 'react-router-dom'

/**
 * @description disabled for auth and protected route
 * @description to be back when auth routes are ready
 */
// import settingsConfig from 'app/configs/settingsConfig'
import SignInConfig from '../main/sign-in/SignInConfig'
import SignUpConfig from '../main/sign-up/SignUpConfig'
import SignOutConfig from '../main/sign-out/SignOutConfig'
import Error404Page from '../main/404/Error404Page'

import SafetyConfig from '../main/apps/safety/SafetyConfig'
import StatisticsConfig from '../main/apps/statistics/StatisticConfig'

const routeConfigs = [
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  StatisticsConfig,
  SafetyConfig,
]

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(
    routeConfigs
    // settingsConfig.defaultAuth
  ),
  {
    path: '/',
    element: <Navigate to='/' />,
  },
  { ...SafetyConfig.routes },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to='404' />,
  },
]

export default routes
