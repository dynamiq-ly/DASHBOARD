/**
 * safety
 */
export const safety = {
  id: 'protocols.safety-measures-component',
  title: 'Safety',
  translate: 'SAFETY',
  type: 'item',
  icon: 'heroicons-outline:heart',
  url: 'safety',
}

/**
 * out hotel
 */
export const ourHotel = {
  id: 'our_hotel',
  title: 'Our Hotel',
  type: 'item',
  icon: 'material-outline:hotel_class',
  url: 'our-hotel',
}

/**
 * analytics
 */

export const analytics = [
  {
    id: 'statistic-component',
    title: 'Statistics',
    type: 'item',
    icon: 'heroicons-outline:chart-pie',
    url: '',
  },
  {
    id: 'finance-component',
    title: 'Finance',
    type: 'item',
    icon: 'heroicons-outline:cash',
    url: 'finance',
  },
]

/**
 * restaurant
 */
export const restuarant = {
  id: 'restaurant-collapse',
  title: 'Restaurants',
  type: 'collapse',
  icon: 'material-outline:restaurant',
  children: [
    {
      id: 'restaurant-collapse.resturant',
      title: 'Restaurant List',
      type: 'item',
      url: '/restaurant/list',
    },
    {
      id: 'restaurant-collapse.menu',
      title: 'Restaurant Menu',
      type: 'collapse',
      children: [
        {
          id: 'restaurant-collapse.menu.food',
          title: 'Food Menu',
          type: 'collapse',
          children: [
            {
              id: 'restaurant-collapse.menu.food.list',
              title: 'Food List',
              type: 'item',
              url: 'restaurant/menu/food/list',
            },
            {
              id: 'restaurant-collapse.menu.food.category',
              title: 'Food Category',
              type: 'item',
              url: 'restaurant/menu/food/category',
            },
          ],
        },
        {
          id: 'restaurant-collapse.menu.drink',
          title: 'Drinks Menu',
          type: 'item',
          url: 'restaurant/menu/drinks',
        },
      ],
    },
    {
      id: 'restaurant-collapse.regulation',
      title: 'Restaurant Regulations',
      type: 'item',
      url: 'restaurant/regulation',
    },
  ],
}

/**
 * bar
 */

export const bar = {
  id: 'bar-collapse',
  title: 'Bars',
  type: 'collapse',
  icon: 'material-outline:local_bar',
  children: [
    {
      id: 'bar-collapse.bar',
      title: 'Bar List',
      type: 'item',
      url: 'bar/list',
    },
    {
      id: 'bar-collapse.bar.list',
      title: 'Bar Menu List',
      type: 'item',
      url: 'bar/menu/list',
    },
    {
      id: 'bar-collapse.bar.category',
      title: 'Bar Menu Category',
      type: 'item',
      url: 'bar/menu/category',
    },
  ],
}

/**
 * entertainement
 */

export const entertainement = {
  id: 'entertainement-collapse',
  title: 'Entertainements',
  type: 'collapse',
  icon: 'material-outline:directions_run',
  children: [
    {
      id: 'entertainement-collapse.entertainement',
      title: 'Entertainement',
      type: 'item',
    },
    {
      id: 'entertainement-collapse.day-activities',
      title: 'Day Activities',
      type: 'item',
    },
    {
      id: 'entertainement-collapse.night-shows',
      title: 'Night Shows',
      type: 'item',
    },
    {
      id: 'entertainement-collapse.sport-event',
      title: 'Sport Events',
      type: 'item',
    },
  ],
}

/**
 * point of interest
 */

export const interestPoint = {
  id: 'point-interest',
  title: 'Point of Interest',
  type: 'collapse',
  icon: 'heroicons-outline:map',
  children: [
    {
      id: 'point-interest.category',
      title: 'Category List',
      type: 'item',
      url: 'interest/category',
    },
    {
      id: 'point-interest.items',
      title: 'Points List',
      type: 'item',
      url: 'interest/list',
    },
  ],
}

/**
 * excursion
 */
export const excursion = {
  id: 'excursion',
  title: 'Excursion & Activities',
  type: 'collapse',
  icon: 'heroicons-outline:emoji-happy',
  children: [
    {
      id: 'excursion.list',
      title: 'Excursions List',
      type: 'item',
      url: 'excursion/list',
    },
    {
      id: 'excursion.category',
      title: 'Category list',
      type: 'item',
      url: 'excursion/category',
    },
  ],
}

/**
 * rooms
 */
export const rooms = {
  id: 'rooms',
  title: 'Rooms',
  type: 'collapse',
  icon: 'material-outline:bed',
  children: [
    {
      id: 'rooms.category',
      title: 'Category list',
      type: 'item',
    },
    {
      id: 'rooms.list',
      title: 'Rooms List',
      type: 'item',
    },
  ],
}

/**
 * phone directory
 */
export const phone_directory = {
  id: 'phone',
  title: 'Phone Directory',
  type: 'item',
  icon: 'material-outline:local_phone',
  url: '/phone-directory',
}

/**
 * Food,drink,mini bar services
 */
export const room_services = {
  id: 'rooms_services',
  title: 'Room Services',
  type: 'collapse',
  icon: 'material-outline:room_service',
  children: [
    {
      id: 'food_service',
      title: 'Food Service',
      type: 'item',
    },
    {
      id: 'drink_service',
      title: 'Drink Service',
      type: 'item',
    },
    {
      id: 'mini_bar_service',
      title: 'Mini Bar Service',
      type: 'item',
    },
  ],
}
/**
 * incidence report
 */
export const incidence_report = {
  id: 'incidence_report',
  title: 'Incidence Report',
  type: 'item',
  icon: 'material-outline:announcement',
  url: '/incidence-report',
}
/**
 * room request
 */
export const room_requests = {
  id: 'room_requests',
  title: 'Room Requests',
  type: 'item',
  icon: 'material-outline:airline_seat_individual_suite',
  url: '/room-request',
}
/**
 * room upgrade
 */
export const room_upgrade = {
  id: 'room_upgrade',
  title: 'Room Upgrade',
  type: 'item',
  icon: 'material-outline:bedroom_child',
  url: '/room-upgrade',
}
/**
 * Housekeeping
 */
export const housekeeping = {
  id: 'housekeeping',
  title: 'Housekeeping',
  type: 'item',
  icon: 'material-outline:cleaning_services',
}
/**
 * laundry
 */
export const laundry = {
  id: 'laundry',
  title: 'Laundry',
  type: 'item',
  icon: 'material-outline:local_laundry_service',
}
/**
 * towels
 */
export const towels = {
  id: 'towels',
  title: 'Towels',
  type: 'item',
  icon: 'material-outline:dry_cleaning',
}
/**
 * television
 */
export const television = {
  id: 'television',
  title: 'Television',
  type: 'item',
  icon: 'material-outline:connected_tv',
}
/**
 * safe deposit box
 */
export const safe_deposit_box = {
  id: 'safe_deposit_box',
  title: 'Safe deposit Box',
  type: 'item',
  icon: 'material-outline:lock',
}
/**
 * electricity
 */
export const electricity = {
  id: 'elecricity',
  title: 'Electricity and Cables',
  type: 'item',
  icon: 'material-outline:bolt',
}
/**
 * air conditioner
 */
export const air_conditioner = {
  id: 'air_conditioner',
  title: 'Air Conditioner',
  type: 'item',
  icon: 'material-outline:device_thermostat',
}
/**
 * air conditioner
 */
export const hair_dryer = {
  id: 'hair_dryer',
  title: 'Hair Dryer',
  type: 'item',
  icon: 'material-outline:air',
}
/**
 * check in and check out
 */
export const check_in_out = {
  id: 'check_in_out',
  title: 'Check In & Out',
  type: 'item',
  icon: 'material-outline:vpn_key',
}
/**
 * connectivity
 */
export const connectivity = {
  id: 'connectivity',
  title: 'Connectivity',
  type: 'item',
  icon: 'material-outline:router ',
}
/**
 * extend your stay
 */
export const extend_stay = {
  id: 'extebd_stay',
  title: 'Extend Your Stay',
  type: 'item',
  icon: 'material-outline:event',
}
/**
 * alarm
 */
export const alarm = {
  id: 'alarm',
  title: 'Alarm Clock',
  type: 'item',
  icon: 'material-outline:access_alarm',
}
/**
 * transportation
 */
export const transportation = {
  id: 'transportation',
  title: 'Transportations',
  type: 'item',
  icon: 'material-outline:local_taxi',
}
/**
 * pool towels
 */
export const pool_towels = {
  id: 'pool_towels',
  title: 'Pool Towels',
  type: 'item',
  icon: 'material-outline:pool',
}
/**
 * laugage vault
 */
export const laugage_vault = {
  id: 'laugage_vault',
  title: 'Laugage Vault',
  type: 'item',
  icon: 'material-outline:cases',
}
/**
 * parking
 */
export const parking = {
  id: 'parking',
  title: 'Parking Lot',
  type: 'item',
  icon: 'material-outline:local_parking',
}
/**
 * medical assistance
 */
export const medical_assistance = {
  id: 'medical_assistance',
  title: 'Medical Assistance',
  type: 'item',
  icon: 'material-outline:medical_services',
}
/**
 * money_exchange
 */
export const money_exchange = {
  id: 'money_exchange',
  title: 'Money Exchange',
  type: 'item',
  icon: 'material-outline:local_atm',
}
/**
 * banks and ATMs
 */
export const banks_atms = {
  id: 'banks_atms',
  title: 'Banks & ATMs',
  type: 'item',
  icon: 'material-outline:atm',
}
/**
 * Tour operator
 */
export const tour_operators = {
  id: 'tour_operators',
  title: 'Tour Operators',
  type: 'item',
  icon: 'material-outline:person',
}

/**
 * other request
 */
export const other_request = {
  id: 'other_request',
  title: 'Other Request',
  type: 'item',
  icon: 'material-outline:drive_file_rename_outline',
}
