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
import DepositBoxConfig from '../main/apps/safe-deposit-box/DepositBoxConfig'
import ElectricityConfig from '../main/apps/electricity/ElectricityConfig'
import AirConditionerConfig from '../main/apps/air-conditioner/AirConditionerConfig'
import HairDryerConfig from '../main/apps/hair-dryer/HairDryerConfig'
import CheckInOutConfig from '../main/apps/check-in-out/CheckInOutConfig'
import ConnectivityConfig from '../main/apps/connectivity/ConnectivityConfig'
import ExtendStayConfig from '../main/apps/extend-stay/ExtendStayConfig'
import AlarmConfig from '../main/apps/alarm-clock/AlarmConfig'
import TransportationConfig from '../main/apps/transportation/TransportationConfig'
import PoolTowelsConfig from '../main/apps/pool-towels/PoolTowelsConfig'
import ParkingConfig from '../main/apps/parking-lots/ParkingConfig'
import LaugageConfig from '../main/apps/laugage-vault/LaugageConfig'
import MedicalAssistanceConfig from '../main/apps/medical-assistance/MedicalAssistanceConfig'
import BanksAtmsConfig from '../main/apps/banks-atms/BanksAtmsConfig'
import TourOperatorConfig from '../main/apps/tour-operators/TourOperatorConfig'
import OtherRequestConfig from '../main/apps/other-request/OtherRequestConfig'
import OurHotelConfig from '../main/apps/our-hotel/OurHotelConfig'
import FinanceConfig from '../main/apps/finance/FinanceConfig'
import EntertainementConfig from '../main/apps/entertainement/EntertainementConfig'
import ExcursionConfig from '../main/apps/excursion/ExcursionConfig'
import RoomConfig from '../main/apps/rooms/RoomConfig'
import FoodServicesConfig from '../main/apps/room-services/FoodServicesConfig'
import GymConfig from '../main/apps/gym/GymConfig'
import PoolConfig from '../main/apps/swimming-pools/PoolConfig'
import HelpCenterAppConfig from '../main/help-center/HelpCenterAppConfig'
import FileManagerConfig from '../main/base/file-manager/FileManagerConfig'

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
  DepositBoxConfig,
  ElectricityConfig,
  AirConditionerConfig,
  HairDryerConfig,
  CheckInOutConfig,
  ConnectivityConfig,
  ExtendStayConfig,
  AlarmConfig,
  TransportationConfig,
  PoolTowelsConfig,
  ParkingConfig,
  LaugageConfig,
  MedicalAssistanceConfig,
  BanksAtmsConfig,
  TourOperatorConfig,
  OtherRequestConfig,
  OurHotelConfig,
  FinanceConfig,
  EntertainementConfig,
  ExcursionConfig,
  RoomConfig,
  FoodServicesConfig,
  GymConfig,
  PoolConfig,
  LaundryConfig,
  HelpCenterAppConfig,
  FileManagerConfig,
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
  { ...HousekeepingConfig.routes },
  { ...LaundryConfig.routes },
  { ...TowelsConfig.routes },
  { ...TelevisionConfig.routes },
  { ...DepositBoxConfig.routes },
  { ...ElectricityConfig.routes },
  { ...AirConditionerConfig.routes },
  { ...HairDryerConfig.routes },
  { ...CheckInOutConfig.routes },
  { ...ConnectivityConfig.routes },
  { ...ExtendStayConfig.routes },
  { ...AlarmConfig.routes },
  { ...TransportationConfig.routes },
  { ...PoolTowelsConfig.routes },
  { ...ParkingConfig.routes },
  { ...LaugageConfig.routes },
  { ...MedicalAssistanceConfig.routes },
  { ...BanksAtmsConfig.routes },
  { ...TourOperatorConfig.routes },
  { ...OtherRequestConfig.routes },
  { ...OurHotelConfig.routes },
  { ...FinanceConfig.routes },
  { ...EntertainementConfig.routes },
  { ...ExcursionConfig.routes },
  { ...RoomConfig.routes },
  { ...FoodServicesConfig.routes },
  { ...GymConfig.routes },
  { ...PoolConfig.routes },
  { ...HelpCenterAppConfig.routes },
  { ...LaundryConfig.routes },
  { ...FileManagerConfig.routes },
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
