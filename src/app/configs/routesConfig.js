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
import RestaurantConfig from '../main/apps/restaurant/RestaurantConfig'
import BarConfig from '../main/apps/bar/BarConfig'
import InterestConfig from '../main/apps/interest-point/InterestConfig'
import PhoneDirectoryConfig from '../main/apps/phone-directory/PhoneDirectoryConfig'
import IncidenceConfig from '../main/apps/incidence-report/IncidenceConfig'
import RoomRequestConfig from '../main/apps/room-request/RoomRequestConfig'
import RoomUpgradeConfig from '../main/apps/room-upgrade/RoomUpgradeConfig'
import HousekeepingConfig from '../main/apps/housekeeping/HousekeepingConfig'
import LaundryConfig from '../main/apps/laundry/LaundryConfig'
import TowelsConfig from '../main/apps/towels/TowelsConfig'
import TelevisionConfig from '../main/apps/television/TelevisionConfig'

const routeConfigs = [
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  StatisticsConfig,
  SafetyConfig,
  RestaurantConfig,
  BarConfig,
  InterestConfig,
  PhoneDirectoryConfig,
  IncidenceConfig,
  RoomRequestConfig,
  RoomUpgradeConfig,
  HousekeepingConfig,
  LaundryConfig,
  TowelsConfig,
  TelevisionConfig,
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
  { ...RestaurantConfig.routes },
  { ...BarConfig.routes },
  { ...InterestConfig.routes },
  { ...SafetyConfig.routes },
  { ...PhoneDirectoryConfig.routes },
  { ...IncidenceConfig.routes },
  { ...RoomRequestConfig.routes },
  { ...RoomUpgradeConfig.routes },
  { ...HousekeepingConfig },
  { ...LaundryConfig },
  { ...TowelsConfig },
  { ...TelevisionConfig },

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
